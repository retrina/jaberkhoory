import { ProposalSection, Translation } from './types';

export const TRANSLATIONS: Record<'fa' | 'en', Translation> = {
  fa: {
    entryTitle: 'پروپوزال وبسایت جابرخوری',
    enterButton: 'مشاهده پروپوزال',
    proposalTitle: 'طرح پیشنهادی کسب‌وکار',
    switchLanguage: 'English',
    backToTop: 'بازگشت به بالا',
  },
  en: {
    entryTitle: 'Jaberkhoory Website Proposal',
    enterButton: 'View Proposal',
    proposalTitle: 'Business Proposal',
    switchLanguage: 'فارسی',
    backToTop: 'Back to Top',
  },
};

export const PROPOSAL_DATA: ProposalSection[] = [
  {
    id: 'overview',
    title: {
      fa: 'معرفی پروژه و چشم‌انداز توسعه در بازار ابوظبی',
      en: 'Project Overview & Strategic Vision in Abu Dhabi',
    },
    subtitle: {
      fa: 'بررسی استراتژیک و راهکارهای اجرایی برای توسعه پایدار برند در بازار امارات.',
      en: 'Strategic review and executive solutions for sustainable brand development in the UAE market.',
    },
    intro: {
      fa: 'این پروژه با هدف ایجاد زیرساخت دیجیتال مدرن برای برند جابرخوری تعریف شده است.',
      en: 'This project is defined with the goal of creating a modern digital infrastructure for the Jaber Khoory brand.',
    },
    items: [
      { fa: 'راه‌اندازی فروشگاه آنلاین دو زبانه (عربی و انگلیسی)', en: 'Bilingual Online Store Launch (Arabic & English)' },
      { fa: 'اتصال موجودی فروشگاه فیزیکی به وب‌سایت و اپلیکیشن', en: 'Physical Store Inventory Sync with Website & App' },
      { fa: 'پیاده‌سازی سیستم CRM و اتوماسیون واتس‌اپ', en: 'CRM Implementation & WhatsApp Automation' },
      { fa: 'یکپارچه‌سازی درگاه‌های پرداخت امارات (Network, PayPal, Stripe)', en: 'UAE Payment Gateway Integration (Network, PayPal, Stripe)' },
      { fa: 'طراحی فلو لجستیک و ارسال در فاز اول شهر ابوظبی', en: 'Logistics & Delivery Flow Design for Abu Dhabi Phase 1' },
      { fa: 'اجرای استراتژی دیجیتال مارکتینگ مبتنی بر تقاضا (Demand-Based Strategy)', en: 'Demand-Based Digital Marketing Strategy Execution' },
    ],
    vision: {
      title: { fa: 'چشم‌انداز برند Jaber Khoory', en: 'Brand Vision' },
      content: {
        fa: 'جابرخوری در مسیر تحول از یک فروشگاه معرفی‌محور به یک اکوسیستم تجارت الکترونیک مدرن در ابوظبی قرار دارد. هدف این پروژه، ایجاد یک پلتفرم یکپارچه آنلاین است که محصولات متنوع خانگی، آشپزخانه، پوشاک و کالاهای مصرفی را با استانداردهای بین‌المللی در اختیار بازار امارات قرار دهد.\n\nچشم‌انداز ما تبدیل شدن به یکی از برندهای قابل اعتماد در حوزه خرده‌فروشی آنلاین در ابوظبی طی ۳ سال آینده است؛ با تمرکز بر:\n• تجربه کاربری ممتاز\n• لجستیک سریع درون‌شهری\n• پرداخت امن و متنوع\n• بازاریابی هدفمند مبتنی بر داده',
        en: 'Jaber Khoory is transitioning from a showcase website into a fully integrated eCommerce ecosystem in Abu Dhabi.\n\nThe objective of this project is to establish a scalable, multilingual online retail platform offering home appliances, kitchenware, lifestyle products, and consumer goods aligned with international standards.\n\nOur 3-year vision is to position Jaber Khoory as a trusted and demand-driven online retail brand in Abu Dhabi through:\n• Optimized user experience\n• City-focused logistics infrastructure\n• Secure and diversified payment solutions\n• Data-driven digital marketing',
      }
    },
    closing: {
      fa: 'این پروژه صرفاً طراحی یک وب‌سایت نیست، بلکه طراحی زیرساخت ورود پایدار به بازار تجارت الکترونیک امارات است.',
      en: 'This project is not merely website development; it is the foundation for sustainable entry into the UAE eCommerce market.'
    }
  },
  {
    id: 'development',
    title: {
      fa: 'طراحی وب‌سایت و اپلیکیشن فروشگاهی',
      en: 'E-Commerce Website & Mobile Application Development',
    },
    subtitle: {
      fa: 'E-Commerce Website & Mobile Application Development',
      en: 'E-Commerce Website & Mobile Application Development',
    },
    intro: {
      fa: 'برای ورود موفق به بازار آنلاین در ابوظبی، صرف داشتن یک وب‌سایت کافی نیست. آنچه مورد نیاز است، ایجاد یک زیرساخت فروش دیجیتال یکپارچه است که بتواند فروش، موجودی، پرداخت، ارسال و ارتباط با مشتری را به‌صورت هماهنگ مدیریت کند.\n\nدر این مسیر، وب‌سایت و اپلیکیشن فروشگاهی به‌عنوان هسته اصلی تحول دیجیتال برند عمل خواهند کرد و فروشگاه فعلی را از حالت معرفی‌محور به یک سیستم فروش فعال و مقیاس‌پذیر تبدیل می‌کنند.',
      en: 'To successfully enter the online retail market in Abu Dhabi, having a simple website is not sufficient. What is required is a fully integrated digital sales infrastructure capable of managing sales, inventory, payments, logistics, and customer interactions in a unified manner.\n\nThe eCommerce website and mobile application will serve as the core digital transformation engine, shifting the brand from a showcase presence to an active and scalable online retail operation.',
    },
    categories: [
      {
        title: { fa: 'طراحی تجربه کاربری (UX/UI)', en: 'UX/UI Design' },
        points: [
          { fa: 'طراحی مدرن متناسب با بازار امارات', en: 'Modern design tailored to the UAE market' },
          { fa: 'نسخه موبایل‌فرست (Mobile-First Design)', en: 'Mobile-First Design' },
          { fa: 'بهینه برای نرخ تبدیل (Conversion Optimized)', en: 'Conversion Optimized' },
        ]
      },
      {
        title: { fa: 'سیستم فروشگاهی پیشرفته', en: 'Advanced E-commerce System' },
        points: [
          { fa: 'مدیریت محصولات چنددسته‌ای', en: 'Multi-category product management' },
          { fa: 'فیلتر هوشمند و جستجوی پیشرفته', en: 'Smart filtering and advanced search' },
          { fa: 'مدیریت تخفیف و کمپین‌ها', en: 'Discount and campaign management' },
          { fa: 'سیستم امتیازدهی (Loyalty Points)', en: 'Loyalty Points system' },
        ]
      },
      {
        title: { fa: 'اتصال به موجودی فروشگاه', en: 'Inventory Integration' },
        points: [
          { fa: 'یکپارچه‌سازی موجودی فروشگاه فیزیکی با وب‌سایت', en: 'Physical store inventory integration' },
          { fa: 'جلوگیری از فروش خارج از موجودی', en: 'Preventing out-of-stock sales' },
          { fa: 'همگام‌سازی لحظه‌ای (Real-Time Sync)', en: 'Real-Time Sync' },
        ]
      },
      {
        title: { fa: 'درگاه‌های پرداخت (Payment Integration)', en: 'Payment Integration' },
        points: [
          { fa: 'اتصال به درگاه‌های بانکی مجاز امارات', en: 'Connection to authorized UAE bank gateways' },
          { fa: 'Network (NAPS), PayPal, Stripe', en: 'Network (NAPS), PayPal, Stripe' },
          { fa: 'امکان پرداخت در محل (COD)', en: 'Cash on Delivery (COD) option' },
        ]
      },
      {
        title: { fa: 'سیستم ارسال و لجستیک', en: 'Shipping & Logistics System' },
        points: [
          { fa: 'تعریف محدوده ارسال (فاز اول: شهر ابوظبی)', en: 'Delivery zone definition (Phase 1: Abu Dhabi)' },
          { fa: 'اتصال به شرکت‌های لجستیک محلی', en: 'Connection to local logistics companies' },
          { fa: 'مدیریت سفارشات و رهگیری مرسوله', en: 'Order management and shipment tracking' },
          { fa: 'زیرساخت توسعه برای لجستیک داخلی در آینده', en: 'Expansion infrastructure for future domestic logistics' },
        ]
      },
      {
        title: { fa: 'اپلیکیشن موبایل (iOS & Android)', en: 'Mobile App (iOS & Android)' },
        points: [
          { fa: 'اتصال مستقیم به وب‌سایت', en: 'Direct website connection' },
          { fa: 'Push Notification برای تخفیف‌ها', en: 'Push Notifications for discounts' },
          { fa: 'امکان خرید سریع', en: 'Quick purchase capability' },
          { fa: 'مدیریت حساب کاربری', en: 'User account management' },
        ]
      }
    ],
    strategicVision: {
      title: { fa: 'نگاه استراتژیک این بخش', en: 'Strategic Vision' },
      content: {
        fa: 'هدف این مرحله صرفاً طراحی یک وب‌سایت نیست، بلکه ایجاد یک بستر پایدار برای رشد فروش آنلاین، مدیریت حرفه‌ای عملیات و افزایش سهم بازار در ابوظبی است.\n\nاین زیرساخت باید به‌گونه‌ای طراحی شود که در آینده بتواند کمپین‌های دیجیتال، تحلیل رفتار مشتری و توسعه بازار را پشتیبانی کند.',
        en: 'This phase is not about building a website; it is about creating a sustainable foundation for online revenue growth, operational efficiency, and market expansion in Abu Dhabi.\n\nThe infrastructure must support future digital campaigns, customer behavior analytics, and scalable business growth.',
      }
    },
    items: [
      { fa: 'کاهش خطای انسانی در مدیریت سفارش', en: 'Reduced operational errors' },
      { fa: 'افزایش سرعت پردازش فروش', en: 'Faster order processing' },
      { fa: 'امکان اجرای کمپین‌های دیجیتال حرفه‌ای', en: 'Scalable digital campaign execution' },
      { fa: 'مقیاس‌پذیری برای رشد در سطح امارات', en: 'UAE-wide expansion capability' },
      { fa: 'ایجاد زیرساخت داده‌محور برای تحلیل رفتار مشتری', en: 'Data-driven customer behavior analytics' },
    ],
    closing: {
      fa: 'این پلتفرم صرفاً یک وب‌سایت فروشگاهی نیست، بلکه زیرساخت دیجیتال یک برند خرده‌فروشی مدرن در بازار رقابتی امارات خواهد بود.',
      en: 'This platform is not merely an online store; it is the digital backbone of a modern retail brand in the competitive UAE market.'
    }
  },
  {
    id: 'marketing',
    title: {
      fa: 'استراتژی بازاریابی دیجیتال',
      en: 'Digital Marketing Strategy',
    },
    subtitle: {
      fa: 'استراتژی‌های نوین برای جذب مشتری و افزایش سهم بازار در ابوظبی.',
      en: 'Modern strategies for customer acquisition and market share growth in Abu Dhabi.',
    },
    intro: {
      fa: 'راه‌اندازی فروش آنلاین بدون یک استراتژی بازاریابی هدفمند، منجر به دیده نشدن برند در بازار رقابتی امارات خواهد شد.\n\nدیجیتال مارکتینگ در این پروژه با هدف ایجاد تقاضا، جذب مشتری هدف و هدایت کاربران به خرید طراحی می‌شود. تمرکز این بخش بر افزایش فروش واقعی و بازگشت سرمایه (ROI) است، نه صرفاً افزایش بازدید.\n\nاستراتژی ما بر پایه سه اصل طراحی می‌شود:\n۱. تمرکز بر محصولات پرتقاضا\n۲. اولویت‌بندی سودآوری و مارجین منطقی\n۳. استفاده از کانال‌های موثر در بازار امارات',
      en: 'Launching an online store without a structured marketing strategy will result in limited visibility within the highly competitive UAE market.\n\nThe digital marketing strategy in this project is designed to generate demand, attract the right target audience, and convert traffic into actual sales. The focus is on revenue growth and ROI, not just traffic generation.\n\nOur strategy is built on three pillars:\n1. Focus on high-demand products\n2. Prioritizing profitability and logical margins\n3. Utilizing effective channels in the UAE market',
    },
    items: [
      { fa: 'تحلیل جامعه هدف در ابوظبی و تعیین پرسونای مشتری', en: 'Target audience analysis within Abu Dhabi' },
      { fa: 'انتخاب و تمرکز بر شبکه‌های اجتماعی مؤثر (Instagram, TikTok, Snapchat)', en: 'Strategic focus on relevant social platforms (Instagram, TikTok, Snapchat)' },
      { fa: 'طراحی ساختار سئو مبتنی بر دسته‌بندی محصولات پرفروش', en: 'SEO structure based on high-demand product categories' },
      { fa: 'اولویت‌بندی محصولات بر اساس تقاضا و میزان مخاطب', en: 'Prioritization of high-interest, high-demand products' },
      { fa: 'اجرای کمپین‌های تبلیغاتی هدفمند در Google Ads', en: 'Targeted advertising campaigns via Google Ads' },
      { fa: 'راه‌اندازی اتوماسیون فروش و ارتباط در WhatsApp', en: 'WhatsApp-based sales and communication automation' },
    ],
    categories: [
      {
        title: { fa: 'سئو (SEO Strategy)', en: 'SEO Strategy' },
        intro: {
          fa: 'سئو در این پروژه به معنای «آوردن مشتری آماده خرید» به وب‌سایت است، نه صرفاً افزایش بازدید.',
          en: 'SEO in this project is about attracting purchase-ready customers, not just increasing traffic.'
        },
        points: [
          { fa: 'دسته‌بندی محصولات بر اساس تقاضای واقعی بازار', en: 'Demand-based product categorization' },
          { fa: 'تمرکز بر محصولات پرمخاطب و پرجستجو', en: 'Focus on high-search and high-demand items' },
          { fa: 'ساختار سایت بهینه‌شده برای بازار امارات', en: 'UAE market-oriented search visibility' },
          { fa: 'تولید محتوای هدفمند برای محصولات کلیدی', en: 'Targeted content for key product segments' },
        ],
        benefits: [
          { fa: 'جذب مشتری بدون هزینه تبلیغ مستقیم در بلندمدت', en: 'Long-term organic customer acquisition' },
          { fa: 'افزایش اعتبار برند در بازار امارات', en: 'Brand authority in the UAE market' },
          { fa: 'کاهش وابستگی کامل به تبلیغات پولی', en: 'Reduced dependency on paid advertising' },
        ]
      },
      {
        title: { fa: 'سوشال مدیا مارکتینگ', en: 'Social Media Marketing' },
        intro: {
          fa: 'در بازار ابوظبی، تصمیم خرید بسیاری از مشتریان تحت تاثیر شبکه‌های اجتماعی است. تمرکز ما روی معرفی محصولات پرفروش و جذاب خواهد بود، نه انتشار محتوای پراکنده و بدون هدف.',
          en: 'In Abu Dhabi, purchase decisions are highly influenced by social media platforms. The focus will be on high-performing product content rather than random content creation.'
        },
        points: [
          { fa: 'افزایش آگاهی از برند در ابوظبی', en: 'Increase brand awareness in Abu Dhabi' },
          { fa: 'معرفی محصولات پرتقاضا و جذاب', en: 'Promote high-demand products' },
          { fa: 'تقویت اعتماد مشتریان از طریق محتوا', en: 'Build customer trust through content' },
          { fa: 'هدایت ترافیک هدفمند به وب‌سایت', en: 'Drive targeted traffic to the website' },
        ],
        benefits: [
          { fa: 'ایجاد تصویر حرفه‌ای برند', en: 'Stronger brand positioning' },
          { fa: 'جذب مشتریان جوان و چندملیتی', en: 'Multi-national audience engagement' },
          { fa: 'افزایش نرخ تبدیل از طریق محتوای ویدیویی', en: 'Higher conversion rates through visual storytelling' },
        ]
      },
      {
        title: { fa: 'واتساپ بیزینس و اتوماسیون', en: 'WhatsApp & Automation' },
        intro: {
          fa: 'در بازار امارات، واتساپ یکی از مهم‌ترین ابزارهای ارتباط با مشتری است. راهاندازی واتساپ بیزینس و سیستم اتوماسیون باعث بهبود پاسخگویی و پیگیری می‌شود.',
          en: 'In the UAE market, WhatsApp is one of the most powerful customer communication tools. Implementing WhatsApp Business with automation enables faster response and better follow-ups.'
        },
        points: [
          { fa: 'پاسخگویی سریع‌تر به مشتریان', en: 'Faster response times' },
          { fa: 'پیگیری خودکار سفارش‌ها', en: 'Order follow-ups' },
          { fa: 'ارسال پیشنهادهای فروش اختصاصی', en: 'Promotional broadcasts' },
          { fa: 'حفظ و بازگشت مشتریان وفادار', en: 'Customer retention strategies' },
        ],
        benefits: [
          { fa: 'افزایش نرخ تبدیل از مکالمه به فروش', en: 'Higher conversation-to-sale conversion' },
          { fa: 'کاهش هزینه پشتیبانی', en: 'Reduced support costs' },
          { fa: 'ارتباط مستقیم و شخصی‌سازی شده با مشتری', en: 'Personalized direct communication' },
        ]
      },
      {
        title: { fa: 'گوگل ادز (Google Ads)', en: 'Google Ads' },
        intro: {
          fa: 'گوگل ادز ابزار جذب سریع مشتری در مرحله ورود به بازار است. در این بخش تمرکز بر محصولات پرتقاضا و کلمات کلیدی خرید‌محور خواهد بود.',
          en: 'Google Ads provides immediate customer acquisition during market entry. The strategy includes promotion of high-demand products and purchase-intent keyword targeting.'
        },
        points: [
          { fa: 'جذب فوری مشتری در مرحله ورود', en: 'Immediate customer acquisition' },
          { fa: 'تبلیغات مبتنی بر کلمات کلیدی خرید‌محور', en: 'Purchase-intent keyword targeting' },
          { fa: 'مدیریت بهینه بودجه و کمپین‌ها', en: 'Optimized campaign management' },
          { fa: 'تحلیل دقیق بازگشت سرمایه (ROI)', en: 'Measurable return on investment (ROI)' },
        ],
        benefits: [
          { fa: 'جذب فوری مشتری', en: 'Immediate traffic generation' },
          { fa: 'کنترل کامل روی بودجه تبلیغاتی', en: 'Budget control' },
          { fa: 'امکان تحلیل دقیق بازگشت سرمایه (ROI)', en: 'Measurable return on investment (ROI)' },
        ]
      }
    ],
    strategicVision: {
      title: { fa: 'جمع‌بندی استراتژیک این بخش', en: 'Strategic Summary' },
      content: {
        fa: 'هدف از دیجیتال مارکتینگ در این پروژه، صرفاً حضور آنلاین نیست؛ بلکه ایجاد جریان مستمر فروش بر اساس داده، تقاضا و سودآوری است.\n\nتمرکز اصلی بر محصولاتی خواهد بود که بیشترین مخاطب و بیشترین بازگشت سرمایه را ایجاد می‌کنند.',
        en: 'The goal of digital marketing in this project is not just online presence, but building a consistent revenue stream based on demand data and profitability.\n\nThe primary focus will be on high-demand, high-impact products that generate sustainable returns.',
      }
    },
    closing: {
      fa: 'دیجیتال مارکتینگ در این پروژه، ابزار دیده شدن نیست؛ ابزار فروش است.',
      en: 'Digital marketing in this project is not about visibility — it is about revenue.'
    }
  },
  {
    id: 'crm',
    title: {
      fa: 'سیستم پشتیبانی و ارتباط با مشتری (CRM)',
      en: 'Customer Care & CRM Strategy',
    },
    subtitle: {
      fa: 'ایجاد رابطه پایدار با مشتری و مدیریت هوشمند فروش در بازار ابوظبی.',
      en: 'Building sustainable customer relationships and smart sales management in Abu Dhabi.',
    },
    intro: {
      fa: 'در ورود به بازار آنلاین، فروش اولین مرحله ارتباط با مشتری است، نه آخرین مرحله.\n\nبرای ایجاد فروش پایدار و برند قابل اعتماد در ابوظبی، لازم است یک سیستم یکپارچه مدیریت ارتباط با مشتری (CRM) و پشتیبانی حرفه‌ای راه‌اندازی شود که بتواند فروش، خدمات پس از فروش، پیگیری سفارش‌ها و تعامل با مشتریان را به‌صورت ساختاریافته مدیریت کند.\n\nهدف این بخش، ایجاد یک زیرساخت نرم‌افزاری برای:\n• مدیریت متمرکز مشتریان\n• سازماندهی تیم فروش و پشتیبانی\n• افزایش نرخ بازگشت مشتریان\n• جلوگیری از اتلاف فرصت‌های فروش',
      en: 'In online retail, a sale is the beginning of the customer relationship — not the end.\n\nTo build a sustainable and trusted brand in Abu Dhabi, an integrated Customer Relationship Management (CRM) and customer care system must be established. This system ensures structured management of sales, after-sales services, order tracking, and customer engagement.\n\nThe objective is to create a centralized software infrastructure for:\n• Customer management\n• Sales and support coordination\n• Customer retention\n• Preventing missed sales opportunities',
    },
    items: [
      { fa: 'افزایش نرخ بازگشت مشتری', en: 'Higher customer retention rate' },
      { fa: 'افزایش اعتماد در بازار امارات', en: 'Increased brand trust' },
      { fa: 'کاهش هزینه جذب مشتری جدید', en: 'Lower customer acquisition cost' },
      { fa: 'مدیریت حرفه‌ای برند', en: 'Professional brand management' },
      { fa: 'افزایش ارزش طول عمر مشتری (CLV)', en: 'Improved customer lifetime value' },
    ],
    categories: [
      {
        title: { fa: 'مدیریت اطلاعات مشتریان', en: 'Customer Information Management' },
        points: [
          { fa: 'ثبت و ذخیره اطلاعات مشتریان', en: 'Customer data registration and storage' },
          { fa: 'تاریخچه خرید هر مشتری', en: 'Purchase history per customer' },
          { fa: 'دسته‌بندی مشتریان بر اساس رفتار خرید', en: 'Customer segmentation based on behavior' },
          { fa: 'تحلیل مشتریان وفادار و بالقوه', en: 'Analysis of loyal and potential customers' },
        ],
        benefits: [
          { fa: 'شناخت دقیق مشتری باعث افزایش فروش هدفمند می‌شود', en: 'Accurate customer insight leads to targeted sales' }
        ]
      },
      {
        title: { fa: 'مدیریت فروش و پیگیری سفارش‌ها', en: 'Sales & Order Tracking' },
        points: [
          { fa: 'ثبت تمام سفارش‌ها در سیستم متمرکز', en: 'Centralized order registration' },
          { fa: 'امکان پیگیری وضعیت سفارش', en: 'Order status tracking' },
          { fa: 'یادآوری پرداخت‌ها یا سفارش‌های نیمه‌کاره', en: 'Payment and abandoned cart reminders' },
          { fa: 'جلوگیری از گم شدن سرنخ‌های فروش', en: 'Preventing lost sales leads' },
        ],
        benefits: [
          { fa: 'کاهش خطای انسانی و افزایش نرخ تبدیل', en: 'Reduced human error and higher conversion' }
        ]
      },
      {
        title: { fa: 'پشتیبانی چندکاناله (Omnichannel)', en: 'Omnichannel Support' },
        points: [
          { fa: 'اتصال واتساپ بیزینس', en: 'WhatsApp Business integration' },
          { fa: 'پاسخگویی از طریق وب‌سایت', en: 'Website-based support' },
          { fa: 'مدیریت پیام‌های شبکه‌های اجتماعی', en: 'Social media message management' },
          { fa: 'ایجاد سیستم تیکتینگ داخلی', en: 'Internal ticketing system' },
        ],
        benefits: [
          { fa: 'مدیریت متمرکز پیام‌ها و پاسخگویی سریع‌تر', en: 'Centralized messaging and faster response' }
        ]
      },
      {
        title: { fa: 'اتوماسیون فروش و ارتباط', en: 'Sales & Communication Automation' },
        points: [
          { fa: 'ارسال پیام‌های خودکار پس از خرید', en: 'Automated post-purchase messaging' },
          { fa: 'پیشنهاد محصولات مرتبط', en: 'Related product recommendations' },
          { fa: 'اطلاع‌رسانی تخفیف‌ها', en: 'Discount notifications' },
          { fa: 'پیگیری رضایت مشتری', en: 'Customer satisfaction follow-up' },
        ],
        benefits: [
          { fa: 'افزایش فروش مجدد بدون هزینه تبلیغ اضافی', en: 'Increased repeat sales without extra ad cost' }
        ]
      },
      {
        title: { fa: 'گزارش‌گیری و تحلیل عملکرد', en: 'Reporting & Analytics' },
        points: [
          { fa: 'تحلیل میزان فروش هر کانال', en: 'Sales analysis per channel' },
          { fa: 'بررسی عملکرد تیم فروش', en: 'Sales team performance review' },
          { fa: 'نرخ بازگشت مشتری', en: 'Customer retention rate' },
          { fa: 'تحلیل رفتار خرید', en: 'Purchase behavior analysis' },
        ],
        benefits: [
          { fa: 'تصمیم‌گیری مدیریتی بر اساس داده، نه حدس', en: 'Data-driven management decisions' }
        ]
      }
    ],
    strategicVision: {
      title: { fa: 'نگاه استراتژیک این بخش', en: 'Strategic Vision' },
      content: {
        fa: 'در بازار رقابتی ابوظبی، برندهایی موفق هستند که فقط فروش نمی‌کنند، بلکه رابطه می‌سازند.\n\nCRM ابزار ساختن این رابطه است.',
        en: 'In the competitive Abu Dhabi market, successful brands do not only sell — they build relationships.\n\nCRM is the system that enables this relationship.',
      }
    },
    closing: {
      fa: 'مدیریت مشتری یک هزینه نیست؛ یک سرمایه‌گذاری برای رشد پایدار است.',
      en: 'Customer management is not a cost — it is an investment in sustainable growth.'
    }
  },
  {
    id: 'logistics',
    title: {
      fa: 'استراتژی لجستیک و ارسال (فاز اول: ابوظبی)',
      en: 'Logistics & Shipping Strategy (Phase 1: Abu Dhabi)',
    },
    subtitle: {
      fa: 'طراحی فلو عملیاتی و مدیریت تحویل کالا در بازار ابوظبی.',
      en: 'Operational flow design and delivery management in the Abu Dhabi market.',
    },
    intro: {
      fa: 'در تجارت الکترونیک، تجربه مشتری تا لحظه تحویل کالا کامل نمی‌شود. بنابراین، برای راه‌اندازی موفق فروش آنلاین در ابوظبی، لازم است یک فلو عملیاتی مشخص و ساختاریافته برای پردازش، ارسال و تحویل سفارش‌ها طراحی شود.\n\nدر فاز اول، تمرکز بر پوشش کامل شهر ابوظبی خواهد بود تا عملیات با کنترل و کیفیت بالا مدیریت شود.',
      en: 'In eCommerce, the customer experience is not complete until the product is delivered. Therefore, a structured operational flow must be designed for order processing, shipping, and delivery management.\n\nPhase 1 will focus exclusively on Abu Dhabi city to ensure operational control and service quality.',
    },
    items: [
      { fa: 'راه‌اندازی سریع و کم‌ریسک', en: 'Fast and low-risk market entry' },
      { fa: 'کنترل کیفیت تحویل در یک شهر مشخص', en: 'Controlled service quality within one city' },
      { fa: 'امکان توسعه مرحله‌ای بدون فشار مالی', en: 'Scalable expansion model' },
      { fa: 'افزایش اعتماد مشتری از طریق رهگیری و اطلاع‌رسانی', en: 'Improved customer trust through tracking and transparency' },
      { fa: 'ایجاد زیرساخت آماده برای توسعه به کل امارات', en: 'Foundation for UAE-wide expansion' },
    ],
    categories: [
      {
        title: { fa: 'طراحی فلو نرم‌افزاری مدیریت سفارش', en: 'Order Management Software Flow' },
        points: [
          { fa: 'ثبت خودکار سفارش در سیستم', en: 'Automated order registration' },
          { fa: 'تخصیص وضعیت سفارش (در حال پردازش، آماده ارسال، تحویل شده)', en: 'Order status allocation' },
          { fa: 'هماهنگی بین فروشگاه، انبار و پشتیبانی', en: 'Coordination between store, warehouse, and support' },
          { fa: 'رهگیری سفارش برای مشتری', en: 'Order tracking for the customer' },
        ],
        benefits: [
          { fa: 'کاهش خطا، افزایش شفافیت، و مدیریت دقیق عملیات روزانه.', en: 'Reduced error, increased transparency, and precise daily management.' }
        ]
      },
      {
        title: { fa: 'همکاری با شرکت‌های لجستیک محلی', en: 'Local Logistics Partnership' },
        intro: {
          fa: 'در فاز اول، ارسال از طریق قرارداد با شرکت‌های لجستیک معتبر در ابوظبی انجام می‌شود.',
          en: 'In Phase 1, shipping will be handled through contracts with reputable logistics companies in Abu Dhabi.'
        },
        points: [
          { fa: 'سرعت راه‌اندازی بالا', en: 'High launch speed' },
          { fa: 'کاهش هزینه سرمایه‌گذاری اولیه', en: 'Lower initial investment cost' },
          { fa: 'کنترل ریسک عملیاتی', en: 'Operational risk control' },
          { fa: 'تمرکز روی فروش و بازاریابی', en: 'Focus on sales and marketing' },
        ]
      },
      {
        title: { fa: 'زیرساخت توسعه برای لجستیک داخلی', en: 'In-house Logistics Infrastructure' },
        intro: {
          fa: 'در صورت رشد حجم سفارش‌ها، امکان توسعه سیستم به لجستیک داخلی (In-house Delivery) وجود خواهد داشت.',
          en: 'In case of order volume growth, the system can be expanded to in-house delivery.'
        },
        points: [
          { fa: 'تیم ارسال داخلی', en: 'In-house delivery team' },
          { fa: 'ناوگان اختصاصی درون‌شهری', en: 'Dedicated urban fleet' },
          { fa: 'تحویل سریع‌تر (Same-Day Delivery)', en: 'Faster delivery (Same-Day Delivery)' },
        ],
        benefits: [
          { fa: 'کنترل کامل بر تجربه مشتری و افزایش حاشیه سود عملیاتی.', en: 'Full control over customer experience and increased operational margin.' }
        ]
      }
    ],
    steps: [
      { fa: 'ثبت سفارش آنلاین', en: 'Online Order Registration' },
      { fa: 'تایید و آماده‌سازی کالا', en: 'Verification & Product Preparation' },
      { fa: 'تحویل به شرکت لجستیک', en: 'Handover to Logistics Company' },
      { fa: 'ارسال درون‌شهری', en: 'Intra-city Delivery' },
      { fa: 'تایید تحویل و ثبت در سیستم', en: 'Delivery Confirmation & System Update' },
    ],
    strategicVision: {
      title: { fa: 'نگاه استراتژیک این بخش', en: 'Strategic Vision' },
      content: {
        fa: 'در فاز اول، تمرکز بر ثبات عملیات است، نه صرفاً گستردگی جغرافیایی. هدف این است که ابتدا در شهر ابوظبی یک مدل اجرایی پایدار ایجاد شود، سپس توسعه مرحله‌ای انجام گیرد.',
        en: 'Phase 1 prioritizes operational stability over geographic expansion. The objective is to build a sustainable operational model in Abu Dhabi before scaling across the UAE.',
      }
    },
    closing: {
      fa: 'لجستیک، ستون اعتماد در تجارت الکترونیک است.',
      en: 'Logistics is the backbone of trust in eCommerce.'
    }
  },
  {
    id: 'payment',
    title: {
      fa: 'راهکارهای پرداخت و مدیریت مالی آنلاین',
      en: 'Payment Solutions Strategy',
    },
    subtitle: {
      fa: 'طراحی زیرساخت پرداخت امن، متنوع و مطابق با قوانین بانکی امارات.',
      en: 'Designing a secure, diversified, and compliant payment infrastructure for the UAE market.',
    },
    intro: {
      fa: 'برای ورود موفق به فروش آنلاین در ابوظبی، زیرساخت پرداخت باید امن، متنوع و مطابق با قوانین بانکی امارات طراحی شود.\n\nدر این پروژه، وبسایت و اپلیکیشن به درگاه‌های پرداخت مجاز و معتبر متصل خواهند شد تا فرآیند دریافت وجه به‌صورت شفاف، قابل پیگیری و مدیریت‌پذیر انجام شود.\n\nهدف این بخش، ایجاد اعتماد در مشتری و کنترل مالی دقیق برای کسب‌وکار است.',
      en: 'For a successful online launch in Abu Dhabi, the payment infrastructure must be secure, diversified, and compliant with UAE banking regulations.\n\nThe website and mobile application will be integrated with authorized and reputable payment gateways, ensuring transparent and manageable financial transactions.\n\nThe objective is to build customer trust while maintaining full financial control.',
    },
    items: [
      { fa: 'افزایش اعتماد مشتری در خرید آنلاین', en: 'Increased customer trust' },
      { fa: 'کاهش رها شدن سبد خرید', en: 'Lower cart abandonment rate' },
      { fa: 'مدیریت متمرکز دریافت‌ها', en: 'Centralized revenue management' },
      { fa: 'آمادگی برای توسعه در سطح امارات و حتی بازار بین‌المللی', en: 'Scalable for UAE-wide and international expansion' },
    ],
    categories: [
      {
        title: { fa: 'درگاه‌های بانکی داخلی امارات', en: 'UAE Local Bank Gateways' },
        points: [
          { fa: 'اتصال به Network (NAPS)', en: 'Network (NAPS) Integration' },
          { fa: 'اتصال به درگاه‌های بانکی محلی', en: 'Local Bank Gateway Integration' },
          { fa: 'پرداخت مستقیم از طریق کارت‌های بانکی امارات', en: 'Direct Payment via UAE Bank Cards' },
        ],
        benefits: [
          { fa: 'افزایش اعتماد مشتریان محلی، تطابق کامل با قوانین مالی امارات، تسویه حساب مستقیم و مدیریت ساده‌تر درآمد', en: 'Increased local trust, full compliance with UAE regulations, direct settlement, and simplified revenue management' },
        ],
      },
      {
        title: { fa: 'درگاه‌های بین‌المللی', en: 'International Gateways' },
        points: [
          { fa: 'PayPal', en: 'PayPal' },
          { fa: 'Stripe', en: 'Stripe' },
          { fa: 'سایر راهکارهای جهانی معتبر', en: 'Other Reputable Global Solutions' },
        ],
        benefits: [
          { fa: 'مناسب برای مشتریان بین‌المللی، افزایش نرخ تبدیل برای مخاطبان چندملیتی، استانداردهای امنیتی جهانی', en: 'Suitable for international customers, higher conversion for multinational audiences, global security standards' },
        ],
      },
      {
        title: { fa: 'گزینه‌های تکمیلی', en: 'Supplementary Options' },
        points: [
          { fa: 'امکان پرداخت در محل (COD) در فاز اول', en: 'Cash on Delivery (COD) in Phase 1' },
          { fa: 'قابلیت فعال‌سازی پرداخت اقساطی در صورت نیاز', en: 'Installment Payment Activation (if needed)' },
          { fa: 'امکان افزودن Apple Pay و Google Pay در مراحل توسعه', en: 'Apple Pay & Google Pay in future phases' },
        ],
      },
    ],
    management: {
      title: { fa: 'ساختار مدیریتی پرداخت‌ها', en: 'Payment Management Structure' },
      points: [
        { fa: 'تمامی تراکنش‌ها قابل رهگیری باشند', en: 'Full transaction traceability' },
        { fa: 'گزارش مالی شفاف در اختیار مدیریت قرار گیرد', en: 'Clear financial reporting' },
        { fa: 'امکان تطبیق پرداخت با سفارش‌ها وجود داشته باشد', en: 'Order-payment reconciliation' },
        { fa: 'مدیریت بازگشت وجه (Refund) ساده و ساختاریافته انجام شود', en: 'Structured refund management' },
      ],
      outcome: {
        fa: 'کاهش خطای مالی و افزایش شفافیت حسابداری.',
        en: 'Reduced financial errors and improved accounting transparency.',
      },
    },
    strategicVision: {
      title: { fa: 'نگاه استراتژیک این بخش', en: 'Strategic Vision' },
      content: {
        fa: 'در تجارت الکترونیک، فرآیند پرداخت نقطه تصمیم نهایی مشتری است. هرچه این مرحله ساده‌تر، امن‌تر و متنوع‌تر باشد، نرخ تبدیل فروش افزایش خواهد یافت.',
        en: 'In eCommerce, the payment stage is the final decision point for the customer. The simpler, more secure, and more flexible the payment options, the higher the conversion rate.',
      },
    },
    closing: {
      fa: 'پرداخت امن، پایه اعتماد در فروش آنلاین است.',
      en: 'Secure payment is the foundation of online trust.',
    },
  },
];
