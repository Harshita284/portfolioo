const sdata = [
  {
    id: "sms",
    title: "School Management System",
    subtitle: "Overview :",
    description: "The School Management System developed by CodeDev is an all-in-one platform designed to simplify and automate school operations. It caters to the needs of administrators, teachers, students, and parents, providing a seamless and secure environment for academic management.",

    overviewImage: "/sms/sms1.jpg",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Saves time on manual tasks",
        "Enhances transparency with real-time data access",
        "Improves communication between school and parents",
        "Facilitates better decision-making through insightful reports"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Marksheets Generation:", description: " Automatically calculate and generate student marksheets based on exam inputs. Support for grade-based and percentage-based evaluations." },
          { title: "Attendance Management:", description: "Real-time attendance tracking for both students and staff. Includes reports, notifications for absentees, and monthly summaries." },
          { title: "Fees Management:", description: "A robust module for collecting, tracking, and managing school fees. Includes features for automated reminders, late fee calculations, and digital receipts." },
          { title: "Transport Management:", description: "Allocate vehicles and routes to students, track transport status, and manage driver/staff assignments." },
          { title: "Staff Management:", description: "A centralized system to handle staff profiles, roles, payrolls." },
          { title: "Role-Based Actions:", description: "Access control system with custom permissions for admins, teachers, students, and parents. Ensures security and clarity in user operations." }
        ]
      }
    ],
    sliderImages: [
      "/sms/sms1.jpg",
      "/sms/sms2.jpg",
      "/sms/sms3.jpg",
      "/sms/sms4.jpg",
      "/sms/sms1.jpg",
      "/sms/sms2.jpg",
    ]
  },
  {
    id: "oms",
    title: "Office Management System",
    subtitle: "Overview :",
    description: "The Office Management System by CodeDev is a powerful and flexible platform built to optimize office operations, team productivity, and business efficiency. Designed for scalability, it supports multiple companies, enabling each to independently manage their teams, tasks, and workflows within a single system.",
    overviewImage: "/oms/oms.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Enables streamlined management for multiple businesses on one platform",
        "Reduces operational overhead and increases accountability",
        "Enhances collaboration across teams and departments",
        "Centralizes communication and task management for better efficiency"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Multi-Company Registration & Management:", description: "Multiple companies can register on the platform and manage their own office operations independently, with isolated data and user permissions." },
          { title: "Task Assignment System", description: "Assign and manage tasks across departments and teams, with options to set deadlines, priorities, and monitor progress in real time." },
          { title: "To-Do Management:", description: "Personal to-do lists for each team member with a daily agenda view for improved productivity." },
          { title: "Attendance with Location & IP Tracking:", description: "Accurate employee attendance logging, capturing IP addresses and GPS locations for transparency and monitoring." },
          { title: "Reminders:", description: "Customizable reminders for meetings, deadlines, and important tasks to ensure timely completion." },
          { title: "Contacts Management:", description: "Organized contact database for clients, vendors, and internal staff, with tagging." },
          { title: "Meeting Management:", description: "Streamline internal and external meetings with scheduling, notification." }
        ]
      }
    ],
    sliderImages: [
      "/oms/oms.png",
      "/oms/oms6.png",
      "/oms/oms2.png",
      "/oms/oms3.png",
      "/oms/oms4.png",
      "/oms/oms5.png"
    ]
  },
  {
    id: "ams",
    title: "Attendance Management System",
    subtitle: "Overview :",
    description: "CodeDev's Attendance Management System is a smart, secure, and location-restricted solution designed to track staff attendance with unmatched reliability. Focused on preventing proxy check-ins and enhancing transparency, the system ensures that attendance can only be marked from authorized office locations.",

    overviewImage: "/ams/atm.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Prevents fake or off-site check-ins",
        "Builds a culture of accountability",
        "Improves HR management with accurate data",
        "Increases trust in remote and hybrid team setups"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "IP-Based Attendance Control:", description: " Admins can define specific IP addresses (e.g., office Wi-Fi routers). Employees must be connected to the authorized network to successfully check in or check out." },
          { title: "Check-In/Check-Out System:", description: " Employees can mark their arrival and departure with timestamps. The system only records attendance when the IP matches the one set by the admin." },
          { title: "Access Restriction for Security:", description: "Prevents remote or proxy attendance marking, making the platform highly reliable and secure for organizations of all sizes." },
          { title: "Daily, Weekly & Monthly Reports:", description: " Auto-generated reports for individual and team attendance patterns, including late arrivals, absentees, and work hours." },
          { title: "Role-Based Access:", description: "Admins can manage staff records, view reports, and control IP settings. Staff can only view their own records and mark attendance within set limits." }
        ]
      }
    ],
    sliderImages: [
      "/ams/atm.png",
      "/ams/atm2.png",
      "/ams/atm.png",
      "/ams/atm2.png",
      "/ams/atm.png",
      "/ams/atm2.png",
    ]
  },
  {
    id: "wdcb",
    title: "Website & Digital Card Builder",
    subtitle: "Overview :",
    description: "CodeDev’s Website and Digital Card Builder is a dynamic platform that empowers businesses to create professional digital identities with ease. Tailored for entrepreneurs, startups, and local businesses, the system allows users to build digital business cards and full-fledged websites by simply selecting templates and submitting business details.",
    overviewImage: "/wdcb/webiste_builder_1.jpg",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Quick and easy business presence setup",
        "Affordable solution for digital branding",
        "Zero coding required for users",
        "Great for freelancers, professionals, and small businesses"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Multi-Business Support:", description: "Multiple businesses can register and independently create their digital profiles and websites on the platform." },
          { title: "Digital Business Card Generator:", description: "Users can quickly create a sleek, mobile-friendly digital business card containing all essential contact information, social links, and a QR code for easy sharing." },
          { title: "Website Builder via Templates:", description: "Business owners can choose from a variety of modern, industry-specific templates. After selecting a design, they submit business content (logo, services, contact, etc.)." },
          { title: "Admin Approval & Custom Deployment:", description: "Once payment is made, the request goes to the admin, who finalizes and deploys the website either on a custom domain (provided by the user) or on a sub-route of the main platform ." },
          { title: "User Dashboard:", description: "A personalized dashboard to track request status, payment history, and access their card/website preview." },
          { title: "Mobile Responsive Designs:", description: "All digital cards and websites are optimized for smartphones and tablets." }
        ]
      }
    ],
    sliderImages: [
      "/wdcb/webiste_builder_1.jpg",
      "/wdcb/website_builder_2.jpg",
      "/wdcb/website_builder_3.jpg",
      "/wdcb/webiste_builder_4.jpg",
      "/wdcb/webiste_builder_1.jpg",
      "/wdcb/website_builder_2.jpg",
    ]
  },
  {
    id: "sbs",
    title: "Sanitary billing System",
    subtitle: "Overview :",
    description: " The Sanitary Billing System by CodeDev is a specialized, tablet-friendly billing solution designed for sanitary and hardware shops. The system enhances customer experience and shop efficiency by allowing customers to self-select products while giving the shopkeeper complete control over pricing and final billing.",
    overviewImage: "/sbs/sb1.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        " Streamlines the in-store billing process",
        "Reduces human error and saves time at checkout",
        "Improves customer experience with interactive selection",
        "Generates clean, branded PDF bills for professional record-keeping"


      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Customer Self-Selection Interface:", description: "Installed on a tablet or screen, customers can browse available sanitary products and select desired items along with their preferred brands." },
          { title: "Shopkeeper Billing Control:", description: "After selection, the shopkeeper reviews the list and inputs the final price for each product, allowing flexibility for discounts or price changes based on market rates." },
          { title: "Automated Bill Generation:", description: "Once pricing is confirmed, a clean and professional PDF bill is auto-generated and can be printed or sent digitally." },
          { title: "User-Friendly UI:", description: "Built with simplicity in mind so both customers and staff can navigate the system with ease." },
        ]
      }
    ],
    sliderImages: [
      "/sbs/sb1.png",
      "/sbs/sb2.png",
      "/sbs/sb1.png",
      "/sbs/sb2.png",
      "/sbs/sb1.png",
      "/sbs/sb2.png",
    ]
  },
  {
    id: "tms",
    title: "TMS Club – Social Business Club Platform",
    subtitle: "Overview :",
    description: "MS Club is an all-in-one social business club platform built by CodeDev that brings together networking, benefits, and digital services for its members. From exclusive offers to job listings, events, and even a personalized business website and card builder — TMS Club creates a complete digital ecosystem for community-driven business networking.",

    overviewImage: "/tms/tms1.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        " Promotes business networking and collaboration",
        "Offers multiple digital tools to boost personal branding",
        "Enhances community value through verified and trusted interactions",
        "Encourages local business growth through member-exclusive benefits"
      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Referral-Based Registration:", description: " Users can register using a referral code or master referral code. This system encourages organic community growth while maintaining exclusivity." },
          { title: "Admin Verification System:", description: "New users must be verified by the admin before accessing member-exclusive features, ensuring security and authenticity." },
          { title: "Offer & Plan Purchasing:", description: "Verified members can buy offers such as health cards, insurance plans, and more curated deals directly from the platform." },
          { title: "Bulk Buying Events:", description: "Members can participate in admin-organized bulk purchase programs for various products or services at discounted rates." },
          { title: "Job Listings:", description: " Verified members can post job opportunities. Other users can apply through the platform, making it a professional network with real-world impact." },
          { title: "Event Registrations:", description: "Members can register for social or charity events such as parties, business meetings, or community drives." },
          { title: "Business Website Builder::", description: "Users can create a personal business website by filling a simple form. Once submitted and approved, it is hosted on a subdomain of the TMS website." },
          { title: "Digital Business Card Generator:", description: " Generate and download professional business cards in PDF format with integrated QR codes." },
          { title: "TMS Card Issuance:", description: "After a successful purchase or event registration, users receive a TMS Card — a unique ID that unlocks access to exclusive benefits and discounts at partner businesses." }
        ]
      }
    ],
    sliderImages: [
      "/tms/tms1.png",
      "/tms/tms2.png",
      "/tms/tms3.png",
      "/tms/tms4.png",
      "/tms/tms5.png",
      "/tms/tms1.png",
      "/tms/tms2.png",

    ]
  },
  {
    id: "ems",
    title: "Export Management System",
    subtitle: "Overview :",
    description: "The Export Management System by CodeDev is an all-in-one digital platform tailored for exporters to manage international trade operations with ease and precision. It simplifies order handling, document generation, shipment tracking, and compliance — while integrating AI to enhance productivity and reduce manual effort.",
    overviewImage: "/ems/Bill_of_lading.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Automates and accelerates the entire export workflow",
        "Reduces manual paperwork and documentation errors",
        "Makes form-filling easier and faster through AI image/PDF recognition",
        "Increases efficiency and transparency for both exporters and clients",


      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Order Management:", description: " Create, update, and track export orders from initiation to fulfillment, with real-time notifications." },
          { title: "Client & Country Database:", description: "Maintain a detailed database of clients and country-specific trade requirements and restrictions." },
          { title: "Auto Document Generation:", description: "Automatically generate key export documents such as invoices, packing lists, shipping labels, certificates, and more" },
          { title: "Shipment Tracking:", description: "Stay updated with shipment statuses through integrated logistics tracking features." },
          { title: "Payment Management:", description: " Monitor invoice payments, generate reminders for dues, and keep records of all financial transactions." },
          { title: "Compliance Tools:", description: "Built-in features to ensure all exports align with international trade laws and destination country regulations." },
          { title: "Multi-Role Access:", description: " Manage users with custom permissions like exporter, admin, document verifier, and logistics handler." },
          { title: "AI-Powered Form Filling:", description: "Users can upload a hard copy image or PDF of export documents or forms. The AI will auto-extract and pre-fill the system’s digital forms—saving time and reducing human error." }
        ]
      }
    ],
    sliderImages: [
      "/ems/Bill_of_lading.png",
      "/ems/custom_Invoice.png",
      "/ems/document_checklist.png",
      "/ems/Expenses.png",
      "/ems/Inward_payments.png",
      "/ems/performa_Invoice.png",
      "/ems/pre_shipment_documents.png",
      "/ems/profit_&_loss.png",
      "/ems/purchase_order.png"
    ]
  },
  {
    id: "ioms",
    title: "Inventory and Order Management System",
    subtitle: "Overview :",
    description: "The Inventory and Order Management System by CodeDev is a comprehensive solution tailored for retail businesses and warehouses. Designed to streamline store operations, this platform combines a web-based dashboard with an Android application for real-time inventory and order handling. From barcode scanning to order processing, the system ensures seamless management of day-to-day business activities.",

    overviewImage: "/iom/iom1.jpg",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Boosts operational efficiency with automation",
        "Minimizes human error through barcode-enabled workflows",
        "Provides real-time insights into inventory and sales",
        "Improves order accuracy and customer satisfaction",


      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Android App for Barcode Scanning:", description: " Enables fast and accurate barcode scanning using mobile devices, improving efficiency in inventory updates and order processing." },
          { title: "Inventory Management:", description: "Track product availability, manage categories, handle batch updates, Real-time updates ensure precise stock control." },
          { title: "Order Management:", description: "Simplifies the creation, tracking, and fulfillment of orders. Supports customer orders, supplier restocking, and internal transfers." },
          { title: "Web-Based Dashboard:", description: "Central control panel for managers to oversee inventory and orders. Includes advanced reporting, search filters, and audit history for better decision-making." },
          { title: "Barcode Integration:", description: "Complete barcode system integration reduces human error and speeds up operations like product entry, sales, and stocktaking." }
        ]
      }
    ],
    sliderImages: [
      "/iom/iom1.jpg",
      "/iom/iom2.jpg",
      "/iom/iom3.jpg",
      "/iom/iom4.jpg",
      "/iom/iom5.jpg",
      "/iom/iom6.jpg",
      "/iom/iom7.jpg",
      "/iom/iom8.jpg"
    ]
  },
  {
    id: "sc",
    title: "Subla Camps",
    subtitle: "Overview :",
    description: " Subla Camps is a modern, user-friendly website developed by CodeDev for a Dubai-based desert camping company. The platform offers a seamless online experience for users looking to book an authentic desert stay in Subla’s luxurious and traditional camps. The system integrates directly with Airbnb, enabling smooth synchronization of bookings and availability across platforms.",
    overviewImage: "/sc/subla2.png",
    websiteLink: "https://sublacamp.ae/",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Enhances customer trust with professional, streamlined booking",
        "Expands reach through Airbnb integration",
        "Saves time and reduces admin workload",
        "Improves booking accuracy and customer satisfaction"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Online Booking System:", description: "A complete reservation system that allows customers to check availability, select camp packages, and make secure online bookings directly through the website." },
          { title: "Airbnb API Integration", description: "Real-time synchronization with the company’s Airbnb account ensures consistency in bookings, availability, and calendar management, eliminating double bookings and manual updates." },
          { title: "Camp Listings and Packages:", description: "Detailed listings of various camping options, including descriptions, pricing, image galleries, and amenities to help users choose their ideal desert experience." },
          { title: "APayment Gateway Integration:", description: " Secure online payments with support for multiple currencies and payment methods, ensuring ease of access for global travelers." },
          { title: "Admin Panel:", description: "A backend dashboard for managing bookings, updating camp details, viewing customer data, and monitoring system performance." }
        ]
      }
    ],
    sliderImages: [
      "/sc/subla1.png",
      "/sc/subla2.png",
      "/sc/subla3.png",
      "/sc/subla4.png",
      "/sc/subla1.png",
      "/sc/subla2.png",
    ]
  },
  {
    id: "afep",
    title: "Alchemy – Furniture E-commerce Platform",
    subtitle: "Overview :",
    description: "Alchemy is a complete e-commerce website developed by CodeDev for a premium furniture brand. Designed to deliver a smooth shopping experience for customers and an intuitive admin panel for business owners, Alchemy offers a full-featured platform for browsing, purchasing, and managing furniture products online.",

    overviewImage: "/afep/alchemy.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Provides a complete, end-to-end e-commerce solution",
        "Empowers business owners with full control via the admin panel",
        "Enhances customer experience with a sleek, responsive UI",
        "Simplifies inventory and order tracking"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Product Catalog & Shopping Experience:", description: "  A beautifully designed product display with high-resolution images, detailed descriptions, pricing, and filtering options. Customers can browse by category, material, size, or brand." },
          { title: "Secure Checkout & Cart System:", description: "A seamless cart and checkout experience with multiple payment options, discount code support, and order confirmation notifications." },
          { title: "Admin Panel:", description: "A robust backend for administrators to manage product listings, categories, pricing, inventory, customer orders, and promotions. Also includes analytics and reporting tools." },
          { title: "Order Management:", description: "Real-time order tracking, order history for customers, and status updates for the admin to manage processing, shipping, and delivery." },
          { title: "User Accounts:", description: "Customers can create accounts, manage addresses, view order history, and save favorite products for future purchases." }
        ]
      }
    ],
    sliderImages: [
      "/afep/alchemy.png",
      "/afep/alchemy2.png",
      "/afep/alchemy3.png",
      "/afep/alchemy4.png",
      "/afep/alchemy.png",
      "/afep/alchemy2.png",
    ]
  },
  {
    id: "lks",
    title: "Little Krishna School",
    subtitle: "Overview :",
    description: "For Little Krishna School, we developed an engaging and vibrant website that showcases its educational programs in daycare, dance, spirituality, and phonics. The design highlights a nurturing environment, experienced staff, and fun-filled learning experiences for children.",

    overviewImage: "/school/lts1.png",
    websiteLink: "https://www.littlekrishnaschool.com/",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Bright and engaging UI for young learners",
        "Easy navigation for parents and guardians",
        "Dedicated sections for each program",
        "Boosts school visibility and trust"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          {
            title: "Daycare Excellence:",
            description: "Our daycare program is carefully crafted to provide a warm, secure, and development-focused environment. It encourages emotional, physical, and social growth in children through age-appropriate activities and guided care."
          },
          {
            title: "Fun Dance Classes:",
            description: "The dance program brings joy and energy into learning by blending rhythm, movement, and creativity. Children explore different styles while improving their coordination, self-expression, and confidence."
          },
          {
            title: "Spiritual Growth:",
            description: "The spirituality segment nurtures children’s inner development through engaging Krishna-centered stories, bhajans, and activities that promote values like kindness, gratitude, and mindfulness from an early age."
          }, {
            title: "Colorful Layouts:",
            description: "The website uses bright, cheerful colors and child-friendly illustrations to create a visually engaging experience that reflects the joyful spirit of the school’s atmosphere."
          },
          {
            title: "Mobile Responsive:",
            description: "Parents can easily access all school information on any device—phone, tablet, or desktop—thanks to the responsive design that ensures consistent performance across platforms."
          },
          {
            title: "Easy Contact & Admissions:",
            description: "A simple and intuitive admission form and contact section allows parents to reach out effortlessly, helping them connect with the school without any hassle or confusion."
          },
          {
            title: "Programs Overview:",
            description: "Each educational program—whether daycare, dance, phonics, or spirituality—is detailed clearly to help parents make informed choices based on their child’s age and interest."
          },
          {
            title: "Staff Profiles:",
            description: "Dedicated sections highlight the school’s experienced and nurturing staff with photographs and bios, creating trust and transparency for new parents."
          },
          {
            title: "Events & Activities:",
            description: "A vibrant section keeps parents updated on upcoming events, special celebrations, and daily fun activities happening in school, fostering a sense of community and involvement."
          }
        ]
      }
    ],
    sliderImages: [
      "/school/lts1.png",
      "/school/lts3.png",
      "/school/lts4.png",
      "/school/lts5.png",
      "/school/lts6.png",
      "/school/lts9.png",
      "/school/lts4.png",
    ]
  },
  {
    id: "add",
    title: "AddWith",
    subtitle: "Overview :",
    description: "We built a modern, user-friendly website for AddWith, a brand known for its modular kitchens, doors, windows, and furnishings. The site emphasizes their commitment to quality and creativity, offering a clean interface and elegant design to reflect their craftsmanship.",

    overviewImage: "/add/add1.png",
    websiteLink: "https://www.addwithinterior.com/",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Showcases premium interior solutions with visual appeal",
        "Streamlines user experience with a clean, minimal design",
        "Boosts customer trust through high-quality presentation",
        "Highlights craftsmanship through detailed product sections"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          {
            title: "Modular Kitchens:",
            description: "Dedicated pages highlight AddWith's innovative and customizable kitchen solutions with galleries and layout previews to inspire homeowners."
          },
          {
            title: "Doors & Windows:",
            description: "Visitors can explore a wide variety of stylish doors and windows, complete with material details and finishing options for better decision-making."
          },
          {
            title: "Furnishings:",
            description: "This section showcases elegant furniture and decor pieces that blend utility with design, each accompanied by high-resolution visuals and descriptions."
          }, {
            title: "Elegant Visual Design:",
            description: "The website reflects the brand’s premium quality with a polished, modern layout that enhances user trust and appeal."
          },
          {
            title: "Interactive Image Galleries:",
            description: "Every product category includes smooth sliders and image galleries to help users engage with the visual aspect of interior design."
          },
          {
            title: "Responsive Layout:",
            description: "The site is fully responsive, ensuring a consistent and beautiful experience across desktops, tablets, and mobile devices."
          },
          {
            title: "Quick Inquiry & Contact:",
            description: "A simplified contact form and clear call-to-actions allow potential clients to easily request consultations or quotes."
          },
          {
            title: "About the Brand:",
            description: "A dedicated brand story section helps build emotional connection and trust by showcasing AddWith’s mission, values, and expertise."
          },
          {
            title: "Navigation Simplicity:",
            description: "Clear menus and smart navigation ensure users can quickly find the information or product category they are looking for."
          }
        ]
      }
    ],
    sliderImages: [
      "/add/add1.png",
      "/add/add2.png",
      "/add/add3.png",
      "/add/add4.png",
      "/add/add5.png",
      "/add/add6.png",
      "/add/add7.png",
      "/add/add10.png",
    ]
  },
  {
    id: "genex",
    title: "Genex",
    subtitle: "Overview :",
    description: "CodeDev designed a sleek and professional website for Genex, an HVAC solutions provider with over 18 years of industry experience. The site highlights their expertise in industrial and commercial HVAC installations, featuring trusted brands and ongoing maintenance support.",

    overviewImage: "/genex/g1.png",
    websiteLink: "https://www.genexgroup.in/",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Establishes trust with a professional online presence",
      "Highlights decades of HVAC experience and brand partnerships",
      "Simplifies lead generation through quick contact options",
      "Educates users on services and maintenance offerings"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          {
            title: "Industrial HVAC Installations:",
            description: "Dedicated pages detail Genex’s large-scale industrial HVAC capabilities, showcasing their experience with warehouses, factories, and production plants."
          },
          {
            title: "Commercial Solutions:",
            description: "The site outlines HVAC design and installation services for commercial spaces like offices, showrooms, and retail centers, with attention to energy efficiency and aesthetics."
          },
          {
            title: "Maintenance & Repairs:",
            description: "Information about Genex’s ongoing support and maintenance packages reassures clients of long-term reliability and performance."
          },  {
            title: "Trusted Equipment Providers:",
            description: "The website features a dedicated section for top HVAC brands Genex partners with, adding credibility and assuring quality assurance for potential clients."
          },
          {
            title: "Energy-Efficient Solutions:",
            description: "Explains the use of cutting-edge, energy-efficient systems that reduce operational costs for businesses and comply with environmental standards."
          },
          {
            title: "Custom Engineering:",
            description: "Details how Genex tailors HVAC systems based on individual project needs, from planning to performance optimization."
          },
          {
            title: "Clean, Corporate Layout:",
            description: "The site uses a modern and minimalistic layout with a bold, confident color palette to reflect the professionalism of the HVAC industry."
          },
          {
            title: "Responsive & Fast:",
            description: "Optimized for speed and mobile responsiveness, ensuring smooth access and fast load times for all users across devices."
          },
          {
            title: "Contact & Quotation Forms:",
            description: "A seamless contact experience allows users to request quotes, schedule inspections, or book consultations effortlessly."
          }
        ]
      }
    ],
    sliderImages: [
      "/genex/g1.png",
      "/genex/g2.png",
      "/genex/g3.png",
      "/genex/g4.png",
      "/genex/g5.png",
      "/genex/g6.png",
      "/genex/g7.png",
      "/genex/g8.png",
      "/genex/g9.png",
      "/genex/g10.png",
    ]
  },
  {
    id: "beyond",
    title: "Beyond Maps",
    subtitle: "Overview :",
    description: "We created a visually immersive website for Beyond Maps, a premium travel company offering exclusive journeys through the Himalayas. The platform captures the essence of off-the-grid travel, guided by native experts, with breathtaking visuals and storytelling that invites visitors to explore the soul of Kashmir, Himachal Pradesh, and Uttarakhand.",

    overviewImage: "/beyond/bm1.png",
    websiteLink: "https://beyondmaps.co.in",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Captures the spirit of immersive Himalayan journeys",
      "Builds trust with real stories and native-led experiences",
      "Engages users with cinematic visuals and storytelling",
      "Simplifies planning with itinerary highlights and booking forms"

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          {
            title: "Kashmir Expeditions:",
            description: "Guided by locals, travelers experience the hidden beauty of Kashmir—from pristine lakes to alpine meadows—beyond the tourist trail, with personalized journeys curated for serenity and discovery."
          },
          {
            title: "Himachal Adventures:",
            description: "Adventurous trails in Himachal Pradesh come alive through village stays, forest hikes, and cultural experiences that blend exploration with a deep connection to local traditions."
          },
          {
            title: "Uttarakhand Escapes:",
            description: "From spiritual hideaways to dramatic treks, the Uttarakhand journeys are designed for those seeking peace, nature, and authentic mountain living guided by native experts."
          },{
            title: "Immersive Visuals:",
            description: "The website features full-width galleries, cinematic transitions, and dramatic imagery that mirror the grandeur of Himalayan landscapes and evoke wanderlust."
          },
          {
            title: "Journey Narratives:",
            description: "Each destination page is crafted with storytelling in mind—sharing voices of travelers, cultural tidbits, and poetic reflections that deepen emotional engagement."
          },
          {
            title: "Interactive Maps:",
            description: "Users can explore regions through custom, scroll-based maps that highlight itineraries, stops, and elevation levels to visualize their adventure before it begins."
          },
          {
            title: "Plan Your Trip:",
            description: "Easy-to-use inquiry forms and detailed itinerary breakdowns make travel planning intuitive and transparent for users seeking tailored experiences."
          },
          {
            title: "Local Expertise:",
            description: "Beyond Maps emphasizes native guides, ensuring authentic experiences, safety, and cultural understanding for travelers at every step."
          },
          {
            title: "Mobile-First Experience:",
            description: "Optimized for smartphones and tablets, the site ensures travelers can browse, plan, and book while on the go—no compromise in performance or design."
          }
        ]
      }
    ],
    sliderImages: [
      "/beyond/bm1.png",
      "/beyond/bm2.png",
      "/beyond/bm3.png",
      "/beyond/bm4.png",
      "/beyond/bm5.png",
      "/beyond/bm6.png",
      "/beyond/bm7.png",
      "/beyond/bm8.png",
      "/beyond/bm9.png",
      "/beyond/bm10.png",
      "/beyond/bm11.png",
      "/beyond/bm12.png",
      "/beyond/bm13.png",
    ]
  },
  {
    id: "ejuuz",
    title: "Ejuuz – Fintech & Marketplace Platform",
    subtitle: "Overview :",
    description: " Ejuuz is a powerful fintech and marketplace platform developed by CodeDev, tailored for the South African market. It seamlessly integrates e-wallet functionality with a digital marketplace, providing users with secure, smart contract-enabled transactions. The platform is built to empower both consumers and vendors with financial transparency, trust, and convenience.",

    overviewImage: "/ejuzz/Ejuuz.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Promotes digital financial inclusion in underbanked communities",
        "Secures transactions using blockchain technology",
        "Empowers small businesses to sell digitally",
        "Builds trust between buyers and sellers with verified smart contracts"


      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          { title: "Smart Contract-Based Transactions:", description: "  All transactions are powered by blockchain smart contracts, ensuring security, transparency, and tamper-proof records." },
          { title: "Digital Wallet (E-Wallet):", description: "Users can store, transfer, and manage funds within the platform using their digital wallet, with multi-layer security and real-time transaction tracking." },
          { title: "Marketplace Module:", description: "Vendors can list their products or services, while users can browse, purchase, and review—all in one integrated system." },
          { title: "User Verification & KYC:", description: "Integrated KYC for vendor and customer onboarding, making the platform safe for financial activities." },
          { title: "Admin Panel for Platform Control:", description: " Full control for the admin to manage users, products, wallet balances, disputes, and smart contracts." },
          { title: "Mobile & Web App:", description: "Available on both mobile and desktop, ensuring accessibility across devices and locations." },
          { title: "Training & Onboarding:", description: "Ejuuz includes a training module for users, educating them on smart contracts, digital payments, and platform usage." }
        ]
      }
    ],
    sliderImages: [
      "/ejuzz/Ejuuz.png",
      "/ejuzz/EjuzzDeatils.png",
      "/ejuzz/Ejuuz.png",
      "/ejuzz/EjuzzDeatils.png",
      "/ejuzz/Ejuuz.png",
      "/ejuzz/EjuzzDeatils.png",
      "/ejuzz/Ejuuz.png",
      "/ejuzz/EjuzzDeatils.png",

    ]
  },
  {
    id: "wavvy",
    title: "Wavvy",
    subtitle: "Overview :",
    description: "Wavvy is a salon marketplace app that connects users with nearby salons for effortless appointment booking. The system includes a mobile app for clients, a web application for salon management, and an admin portal—creating a seamless ecosystem for both customers and salon owners.",
    overviewImage: "/mobile/Wavyy.png",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Manage appointments and staff schedules in one place.",
        "Increase operational efficiency with automated booking management.",
        "Track business performance and customer feedback."

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          {
            title: "Mobile App for Clients:",
            description: "The Wavvy mobile app allows clients to easily browse, book, and manage salon appointments on the go. With an intuitive interface and seamless booking process, users can find and schedule appointments with nearby salons in just a few clicks."
          },
          {
            title: "Web Application for Salon Management:",
            description: "Salon owners can manage their appointments, services, and staff through the web-based salon management system. This platform provides salon owners with an efficient way to track bookings, manage resources, and optimize their daily operations."
          },
          {
            title: "Admin Portal:",
            description: "The admin portal offers a comprehensive view of the entire system, enabling administrators to oversee both salons and client activities. This includes managing user accounts, tracking performance, and ensuring smooth operations across the marketplace."
          }
        ]
      }
    ],
    sliderImages: [
      "/mobile/Wavyy.png",
      "/mobile/WavyyDetails.png",
      "/mobile/Wavyy.png",
      "/mobile/WavyyDetails.png",
      "/mobile/Wavyy.png",
      "/mobile/WavyyDetails.png",
      "/mobile/Wavyy.png",
      "/mobile/WavyyDetails.png"
    ]
  },
  {
    id: "lms",
    title: "Learning Management System (LMS)",
    subtitle: "Overview :",
    description: "This MERN stack-based app allows users to enroll in online courses like App Development and Web Development. With interactive lessons, quizzes, and exams, the LMS offers an engaging and educational experience for learners.",

    overviewImage: "/mobile/LMS.jpg",
    benefits: {
      buttonText: "Benefits",
      list: [
        "Quick and easy enrollment process.",
        "Wide range of courses available.",
        "Courses for different skill levels.",
        "Engaging multimedia lessons for improved learning.",
        "Hands-on exercises and quizzes to reinforce concepts.",

      ]
    },
    accordions: [
      {
        header: "Key Features",
        features: [
          {
            title: "Easy Enrollment Process:",
            description: "Users can quickly browse and enroll in various courses like App Development and Web Development, with real-time availability updates."
          },
          {
            title: "Wide Range of Courses:",
            description: "The LMS offers a variety of courses to suit different skill levels, from beginner to advanced learners."
          },
          {
            title: "Instant Confirmation:",
            description: "Once enrolled, users receive instant confirmation and access to their chosen course material."
          }, {
            title: "Exams and Assessments:",
            description: "Learners can take exams to validate their knowledge and track their progress throughout the course."
          },
          {
            title: "Earn Certifications:",
            description: "Upon completing the course, learners receive certifications that boost their career opportunities and credibility."
          },
          {
            title: "Instant Results:",
            description: "Once the exam is completed, results are generated instantly, allowing learners to evaluate their performance."
          }
        ]
      }
    ],
    sliderImages: [
      "/mobile/LMS.jpg",
      "/mobile/LMSDetails.jpg",
      "/mobile/LMS.jpg",
      "/mobile/LMSDetails.jpg",
      "/mobile/LMS.jpg",
      "/mobile/LMSDetails.jpg",
      "/mobile/LMS.jpg",
      "/mobile/LMSDetails.jpg",
    ]
  }, 
  


];

export default sdata;
