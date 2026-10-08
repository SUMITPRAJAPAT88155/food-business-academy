import franchiseBlueprint from '@/assets/images/business-models/Fast_Restaurant_Model__Neon_Circuit_Blueprint2-HD.png';

export type BusinessModelCategory =
  | 'delivery'
  | 'dine-in'
  | 'food-brand'
  | 'service'
  | 'scalable';

export interface BusinessModel {
  id: string;
  name: string;
  category: BusinessModelCategory;
  categoryLabel: string;
  description: string;
  focusAreas: string[];
  image: string;
  imageAlt: string;
  about: string;
  whoItsFor: string;
  systemsRequired: string[];
  growthConsiderations: string[];
  nextStep: string;
}

export const businessModelFilters = [
  { id: 'all', label: 'All' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'dine-in', label: 'Dine-In' },
  { id: 'food-brand', label: 'Food Brand' },
  { id: 'service', label: 'Service' },
  { id: 'scalable', label: 'Scalable' },
] as const;

export type BusinessModelFilter = (typeof businessModelFilters)[number]['id'];

export const businessModels: BusinessModel[] = [
  {
    id: 'cloud-kitchen',
    name: 'Cloud Kitchen',
    category: 'delivery',
    categoryLabel: 'Delivery',
    description: 'Build a delivery-focused food business with the right menu, operations, technology and customer acquisition systems.',
    focusAreas: ['Menu strategy', 'Food costing', 'Delivery operations', 'Online customer acquisition', 'Order management', 'Repeat business'],
    image: 'https://images.pexels.com/photos/5953548/pexels-photo-5953548.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Food delivery boxes prepared in a professional restaurant kitchen',
    about: 'A cloud kitchen is a delivery-first food operation built around focused menus, efficient production and digital ordering. The model rewards operational discipline and a strong understanding of delivery customers.',
    whoItsFor: 'Entrepreneurs who want to launch a delivery-led food concept, test a focused menu or build a food operation without a traditional dining room.',
    systemsRequired: ['Focused menu and recipe standards', 'Kitchen production flow', 'Delivery-platform and order management', 'Packaging and dispatch checks', 'Customer feedback and repeat-order tracking'],
    growthConsiderations: ['Menu expansion without slowing the kitchen', 'Balancing platform dependence with direct ordering', 'Building repeat demand through retention and consistent quality'],
    nextStep: 'Clarify the concept, delivery territory and menu economics before choosing a launch path.',
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    category: 'dine-in',
    categoryLabel: 'Dine-In',
    description: 'Build a restaurant with the right concept, menu, pricing, operations, team and customer experience.',
    focusAreas: ['Concept development', 'Menu planning', 'Pricing', 'Operations', 'Team systems', 'Marketing'],
    image: 'https://images.pexels.com/photos/36430088/pexels-photo-36430088.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Chef carefully garnishing a dish in a professional restaurant kitchen',
    about: 'A restaurant combines a clear customer promise with memorable food, service and atmosphere. Sustainable performance comes from connecting the guest experience to disciplined back-of-house systems.',
    whoItsFor: 'Founders planning a new restaurant or owners who want to strengthen concept clarity, service delivery, team performance and day-to-day control.',
    systemsRequired: ['Concept and customer experience standards', 'Menu engineering and recipe controls', 'Front-of-house and kitchen workflows', 'Team roles, training and shift routines', 'Guest feedback and local marketing systems'],
    growthConsiderations: ['Protecting consistency as volume increases', 'Improving table turns without compromising experience', 'Creating a repeatable operating rhythm before adding locations'],
    nextStep: 'Define the concept, customer and operating model that will guide every restaurant decision.',
  },
  {
    id: 'food-brand',
    name: 'Food Brand',
    category: 'food-brand',
    categoryLabel: 'Food Brand',
    description: 'Turn a food product or concept into a structured and scalable food brand.',
    focusAreas: ['Product strategy', 'Brand positioning', 'Pricing', 'Distribution', 'Marketing', 'Growth systems'],
    image: 'https://images.pexels.com/photos/13253598/pexels-photo-13253598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Artisan nut butter jars displayed as a premium food product brand',
    about: 'A food brand turns a product into a repeatable customer relationship. It requires more than an attractive package — it needs a clear position, dependable product experience and channels that fit the business.',
    whoItsFor: 'Product-led entrepreneurs building packaged foods, specialty products, sauces, snacks, beverages or a distinctive food concept.',
    systemsRequired: ['Product and quality standards', 'Brand positioning and packaging direction', 'Pricing and channel margins', 'Inventory and distribution routines', 'Content, launch and customer feedback systems'],
    growthConsiderations: ['Expanding the range without diluting the brand', 'Choosing distribution channels carefully', 'Maintaining quality and availability as demand grows'],
    nextStep: 'Identify the product promise, ideal customer and most practical route to market.',
  },
  {
    id: 'catering-business',
    name: 'Catering Business',
    category: 'service',
    categoryLabel: 'Service',
    description: 'Build a professional catering business with structured operations, sales and repeat-client systems.',
    focusAreas: ['Service planning', 'Menu costing', 'Event operations', 'Sales', 'Team management', 'Customer retention'],
    image: 'https://images.pexels.com/photos/34321369/pexels-photo-34321369.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Elegant catering tray of appetizers prepared for a professional event',
    about: 'Catering is a project-based food business where planning, logistics and service quality matter as much as the food. A dependable process helps each event feel bespoke without becoming improvised.',
    whoItsFor: 'Chefs, event specialists and food entrepreneurs serving private events, corporate gatherings, weddings or recurring institutional clients.',
    systemsRequired: ['Enquiry, quotation and booking process', 'Event menus, costing and production plans', 'Transport, setup and service checklists', 'Event team roles and briefing routines', 'Post-event feedback and referral follow-up'],
    growthConsiderations: ['Managing multiple events without quality slips', 'Building reliable supplier and team networks', 'Turning strong events into repeat and referral business'],
    nextStep: 'Map the event journey from first enquiry to final follow-up and identify the systems it needs.',
  },
  {
    id: 'biryani-business',
    name: 'Biryani Business',
    category: 'delivery',
    categoryLabel: 'Delivery',
    description: 'Build a focused biryani business with the right product, costing, operations and customer acquisition strategy.',
    focusAreas: ['Product consistency', 'Recipe standardization', 'Food costing', 'Packaging', 'Delivery', 'Marketing'],
    image: 'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Chicken biryani served with curry in a restaurant setting',
    about: 'A focused biryani concept can be powerful when the product is consistent, the menu is disciplined and the delivery experience protects quality. The operating model should make every batch dependable.',
    whoItsFor: 'Food entrepreneurs who want to build a focused biryani-led concept through delivery, takeaway, a compact outlet or a combination of channels.',
    systemsRequired: ['Recipe, batch and portion standards', 'Ingredient purchasing and yield controls', 'Packaging designed for heat and presentation', 'Delivery radius and dispatch routines', 'Local demand generation and repeat-order systems'],
    growthConsiderations: ['Preserving product quality during peak demand', 'Expanding beyond one hero product thoughtfully', 'Using customer data to improve offers and ordering patterns'],
    nextStep: 'Define the hero product, serving format and operating standards that will anchor the concept.',
  },
  {
    id: 'qsr',
    name: 'QSR',
    category: 'dine-in',
    categoryLabel: 'Dine-In',
    description: 'Build a quick-service food business around speed, consistency, systems and repeat customers.',
    focusAreas: ['Menu engineering', 'Standardization', 'Operations', 'Team processes', 'Customer acquisition', 'Scalability'],
    image: 'https://images.pexels.com/photos/10636732/pexels-photo-10636732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern quick-service restaurant interior with bright customer seating',
    about: 'A QSR is designed around a clear offer, fast service and repeatable execution. The model depends on removing friction from ordering and production while keeping the experience consistent.',
    whoItsFor: 'Operators developing a high-throughput food concept, compact format or value-led menu where speed and repeat visits are central.',
    systemsRequired: ['Menu engineering for speed and contribution', 'Station layouts and production standards', 'Order-to-handover timing routines', 'Team training and shift checklists', 'Customer acquisition and loyalty tracking'],
    growthConsiderations: ['Increasing volume without creating bottlenecks', 'Maintaining consistency across shifts and sites', 'Designing the format for future replication'],
    nextStep: 'Design the customer journey and production flow around the speed and consistency promise.',
  },
  {
    id: 'franchise-business',
    name: 'Franchise Business',
    category: 'scalable',
    categoryLabel: 'Scalable',
    description: 'Prepare a food business for structured expansion with systems, SOPs and repeatable operations.',
    focusAreas: ['SOPs', 'Business systems', 'Brand standards', 'Operations', 'Team training', 'Franchise readiness'],
    image: franchiseBlueprint,
    imageAlt: 'Business systems blueprint illustrating a structured restaurant model',
    about: 'Franchise readiness begins with a business that can be taught, measured and repeated. It requires operational clarity, documented standards and a brand experience that can travel to new locations.',
    whoItsFor: 'Established food-business owners who have a proven operating model and are exploring structured expansion through partners or multiple locations.',
    systemsRequired: ['Documented SOP library', 'Brand and site standards', 'Training and certification path', 'Quality audits and reporting', 'Support structure for new operators'],
    growthConsiderations: ['Testing repeatability before expansion', 'Protecting standards while giving operators clarity', 'Building support capacity alongside the franchise network'],
    nextStep: 'Audit the existing business and document the parts that must be repeatable before expansion.',
  },
  {
    id: 'home-based-food-business',
    name: 'Home-Based Food Business',
    category: 'service',
    categoryLabel: 'Service',
    description: 'Start a food business from home with a practical model for products, pricing, marketing and order management.',
    focusAreas: ['Product selection', 'Costing', 'Pricing', 'Home operations', 'Social media marketing', 'Customer management'],
    image: 'https://images.pexels.com/photos/26920910/pexels-photo-26920910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Food entrepreneur working with products in a colorful home kitchen',
    about: 'A home-based food business can be a practical way to test a product and build demand with controlled overhead. The key is to start with a focused offer and create simple systems that protect time and quality.',
    whoItsFor: 'Home cooks, bakers and food creators who want to turn a trusted product into an organized, customer-ready business from home.',
    systemsRequired: ['Focused product range and batch planning', 'Costing, pricing and order cutoffs', 'Safe home production routines', 'Social content and enquiry management', 'Payment, packing and delivery checklists'],
    growthConsiderations: ['Managing capacity without overcommitting', 'Knowing when the home model needs additional space', 'Building demand through consistency and customer relationships'],
    nextStep: 'Choose a focused product, define your capacity and build a simple order-to-delivery routine.',
  },
];
