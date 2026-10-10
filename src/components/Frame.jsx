/* Picture frames for project images: a browser window for websites, a handset for app screens,
   and a plain rounded frame for composed overview images. */

export function Picture({ image, sizes = "(max-width: 760px) 100vw, 50vw", eager = false, alt, className }) {
  const small = Math.min(image.w, 960);
  const srcSet = image.w > small ? `${image.sm} ${small}w, ${image.src} ${image.w}w` : undefined;
  return (
    <img
      className={className}
      src={image.src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={image.w}
      height={image.h}
      alt={alt ?? image.caption}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
    />
  );
}

export function BrowserFrame({ label, children, className = "" }) {
  return (
    <div className={`frame frame-browser ${className}`}>
      <div className="frame-bar" aria-hidden="true">
        <span className="frame-dots"><i /><i /><i /></span>
        {label && <span className="frame-url">{label}</span>}
      </div>
      <div className="frame-body">{children}</div>
    </div>
  );
}

/** Chooses the right frame for an image from a project gallery. */
export function FramedImage({ project, image, sizes, eager }) {
  if (image.kind === "phone") {
    return (
      <div className="frame frame-phone">
        <img src={image.src} width={image.w} height={image.h} alt={image.caption} loading={eager ? "eager" : "lazy"} decoding="async" />
      </div>
    );
  }
  if (image.kind === "cover" || project.frame === "plain") {
    return (
      <div className="frame frame-plain">
        <Picture image={image} sizes={sizes} eager={eager} />
      </div>
    );
  }
  return (
    <BrowserFrame label={project.address ?? project.title}>
      <Picture image={image} sizes={sizes} eager={eager} />
    </BrowserFrame>
  );
}
