import {
  Banknote, Bot, Boxes, BrainCircuit, Building2, ChartColumn, ChartPie, CheckCheck, Cloud, Code, Compass, Factory,
  GraduationCap, Hammer, HeartPulse, Hospital, Landmark, Layers, MonitorSmartphone, RefreshCw, Rocket, Search,
  ShieldCheck, ShoppingCart, Sparkles, Truck, Users, Workflow,
} from "lucide-react";

/* Icon names used by the content in src/data. */
const icons = {
  code: Code,
  devices: MonitorSmartphone,
  brain: BrainCircuit,
  cloud: Cloud,
  transform: RefreshCw,
  layers: Layers,
  bot: Bot,
  chart: ChartColumn,
  shield: ShieldCheck,
  advisory: Users,
  check: CheckCheck,
  api: Workflow,
  ai: Sparkles,
  box: Boxes,
  heart: HeartPulse,
  pie: ChartPie,
  search: Search,
  compass: Compass,
  hammer: Hammer,
  rocket: Rocket,
  refresh: RefreshCw,
  medical: Hospital,
  bank: Banknote,
  factory: Factory,
  cart: ShoppingCart,
  building: Building2,
  gov: Landmark,
  cap: GraduationCap,
  truck: Truck,
};

export default function Icon({ name, size = 22, ...rest }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp size={size} strokeWidth={1.9} aria-hidden="true" {...rest} />;
}
