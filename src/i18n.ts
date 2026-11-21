export type Lang = 'en' | 'tr';
export type Page = 'home' | 'hire';

export const routes: Record<Lang, Record<Page, string>> = {
  tr: { home: '/', hire: '/birlikte-calisalim' },
  en: { home: '/en', hire: '/en/hire-me' }
};

export const contact = {
  email: 'metindir@gmail.com',
  github: 'https://github.com/metinsut',
  linkedin: 'https://www.linkedin.com/in/metinsut/'
};

type Job = { years: string; role: string; place: string };
type Service = { title: string; body: string };
type Stage = { name: string; body: string; outcomes: string[] };

type Copy = {
  langName: string;
  otherLang: string;
  nav: { hire: string; home: string; back: string; darkTheme: string };
  home: {
    title: string;
    description: string;
    headline: string;
    intro: string;
    lead: string;
    routeTitle: string;
    route: Stage[];
    outcomeLabel: string;
    workTitle: string;
    work: Job[];
    findTitle: string;
  };
  hire: {
    title: string;
    description: string;
    headline: string;
    intro: string;
    services: Service[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaSubject: string;
    ctaAlt: string;
  };
  footer: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    langName: 'English',
    otherLang: 'Türkçe',
    nav: { hire: 'Hire me', home: 'Home', back: 'Back to home', darkTheme: 'Dark theme' },
    home: {
      title: 'Metin Süt, product engineer in Istanbul | Web and mobile apps',
      description:
        'Metin Süt is a freelance product engineer in Istanbul, turning work that companies run by hand, in spreadsheets or across scattered tools, into web and mobile apps, from understanding the problem to launch and upkeep.',
      headline: 'I turn ideas into products that work, from the first sketch to the release.',
      intro:
        'I’m Metin Süt, a product engineer in Istanbul. I take the work companies run by hand, in spreadsheets or across disconnected tools, and turn it into apps their teams and customers enjoy using every day.',
      lead: 'My aim is to take a problem in your business, move it into a digital product and solve it there. From the first conversation to keeping the product running, you deal with the same person, so nothing gets lost in a handoff.',
      routeTitle: 'From idea to release',
      route: [
        {
          name: 'Understand the problem',
          body: 'I start by listening to how your business runs today: who does what, and where time and money get lost. Then we decide together what moves into software and what the first version can’t do without.',
          outcomes: [
            'A clear statement of the problem and the goal',
            'The paths people will follow, step by step (user flows)',
            'The scope of the first version and a priority list'
          ]
        },
        {
          name: 'Design the solution',
          body: 'You see the product before a line of code is written: which screens exist, where people click, what they see next. Rough sketches first, then realistic screens you can click through. If something is wrong, we fix it here, while it’s still cheap.',
          outcomes: [
            'Rough sketches of every screen (wireframes)',
            'A clickable sample of the app (prototype)',
            'Shared rules for colors, type and buttons (design system)'
          ]
        },
        {
          name: 'Build the product',
          body: 'I turn those screens into a working product: the part people see, whether a website, a panel or a phone app, and the part behind it that stores data, manages accounts and talks to other systems. One person builds both, so the pieces fit.',
          outcomes: [
            'Web and mobile apps (frontend, mobile)',
            'The database and server side (backend)',
            'Connections to payments, email and the tools you already use (integrations)'
          ]
        },
        {
          name: 'Launch and keep it running',
          body: 'I open the product to your users, and the work doesn’t stop there. New versions go out without downtime, I find out when something breaks, and your data is backed up. What real users tell us shapes what we improve next.',
          outcomes: [
            'Release and automatic updates (CI/CD)',
            'Error and performance tracking (monitoring)',
            'Backups, security updates and regular maintenance'
          ]
        }
      ],
      outcomeLabel: 'What you get',
      workTitle: 'Work',
      work: [
        { years: '2026 – now', role: 'Product engineer', place: 'Freelance' },
        { years: '2024 – 2026', role: 'Software engineer', place: 'Qkare' },
        { years: '2023 – 2024', role: 'Software engineer', place: 'Optimus Yazılım' },
        { years: '2021 – 2022', role: 'Software engineer', place: 'Borda Technology' },
        { years: '2019 – 2021', role: 'Software engineer', place: 'ComeOn Group' },
        { years: '2017 – 2019', role: 'Software engineer', place: 'Gülenayva' },
        { years: '2013 – 2016', role: 'Mapping engineer', place: 'Infotech' }
      ],
      findTitle: 'Find me'
    },
    hire: {
      title: 'Hire Metin Süt | MVPs, web and mobile apps',
      description:
        'MVPs, web and mobile apps, admin panels, UX improvements and AI features, from understanding the problem to launch, by one person.',
      headline: 'Hire me',
      intro:
        'I work with founders and small teams who need a product built, or an existing one made better. I handle product analysis, design, and frontend, mobile and backend development, so there’s one person between your idea and the release.',
      services: [
        {
          title: 'Your first version',
          body: 'You have an idea and need an MVP you can put in front of users. We work out the scope together, then I design and build it, web or mobile, frontend to backend.'
        },
        {
          title: 'Web apps, admin panels and automations',
          body: 'The tools your team opens every day: dashboards, back-office panels, and the integrations and scripts that take manual work off their plate.'
        },
        {
          title: 'Better UX for a product you already have',
          body: 'If users get stuck or the interface has grown messy, I review the flows, fix what’s in the way, and clean up the frontend underneath: design system, state, performance.'
        },
        {
          title: 'AI features',
          body: 'Search, summaries, assistants and automations built into your product, in the places where they save your users time.'
        }
      ],
      ctaTitle: 'Tell me what you’re building',
      ctaBody: 'A few lines about the idea and when you need it is enough to start.',
      ctaButton: 'Email me',
      ctaSubject: 'A project',
      ctaAlt: 'or message me on LinkedIn'
    },
    footer: 'Istanbul'
  },
  tr: {
    langName: 'Türkçe',
    otherLang: 'English',
    nav: {
      hire: 'Birlikte çalışalım',
      home: 'Ana sayfa',
      back: 'Ana sayfaya dön',
      darkTheme: 'Koyu tema'
    },
    home: {
      title: 'Metin Süt, İstanbul’da ürün mühendisi | Web ve mobil uygulama',
      description:
        'Metin Süt, İstanbul’da serbest çalışan bir ürün mühendisi. Şirketlerin elle, Excel’le ya da dağınık araçlarla yürüttüğü işleri, sorunu anlamaktan yayına ve bakıma kadar web ve mobil uygulamalara dönüştürüyor.',
      headline: 'Fikirleri baştan sona, çalışan ürünlere dönüştürüyorum.',
      intro:
        'Ben Metin Süt, İstanbul’da ürün mühendisiyim. Şirketlerin elle, Excel’le ya da birbirinden kopuk araçlarla yürüttüğü işleri, ekiplerinin ve müşterilerinin her gün severek kullandığı uygulamalara dönüştürüyorum.',
      lead: 'Amacım, işindeki bir sorunu dijital bir ürüne taşıyıp orada çözmek. İlk konuşmadan ürünü yayında tutmaya kadar hep aynı kişiyle ilerliyorsun; devir teslim olmadığı için arada hiçbir şey kaybolmuyor.',
      routeTitle: 'Fikirden yayına',
      route: [
        {
          name: 'Sorunu anlamak',
          body: 'Önce işini dinliyorum: bugün nasıl yürüyor, kim ne yapıyor, zaman ve para nerede kayboluyor. Sonra neyin dijitale taşınacağına ve ilk sürümde neyin olmazsa olmaz olduğuna birlikte karar veriyoruz.',
          outcomes: [
            'Sorunun ve hedefin net bir tanımı',
            'Kullanıcıların adım adım izleyeceği yollar (kullanıcı akışları)',
            'İlk sürümün kapsamı ve öncelik listesi'
          ]
        },
        {
          name: 'Çözümü tasarlamak',
          body: 'Daha tek satır kod yazılmadan ürünü görüyorsun: hangi ekranlar var, kullanıcı nereye tıklıyor, karşısına ne çıkıyor. Önce kaba çizimler, sonra gerçeğe yakın, tıklayıp gezebileceğin ekranlar. Yanlış bir şey varsa burada, henüz ucuzken düzeltiyoruz.',
          outcomes: [
            'Her ekranın kaba taslağı (wireframe)',
            'Tıklanabilir örnek uygulama (prototip)',
            'Renk, yazı ve butonlar için ortak kurallar (design system)'
          ]
        },
        {
          name: 'Ürünü geliştirmek',
          body: 'Tasarlanan ekranları çalışan bir ürüne dönüştürüyorum: kullanıcının gördüğü taraf (web sitesi, panel ya da telefon uygulaması) ve arkada verileri saklayan, hesapları yöneten, diğer sistemlerle konuşan taraf. İkisi de aynı elden çıktığı için parçalar birbirine uyuyor.',
          outcomes: [
            'Web ve mobil uygulama (frontend, mobil)',
            'Veritabanı ve sunucu tarafı (backend)',
            'Ödeme, e-posta ve zaten kullandığın araçlarla bağlantılar (entegrasyon)'
          ]
        },
        {
          name: 'Yayına almak ve yaşatmak',
          body: 'Ürünü kullanıcılarına açıyorum, iş burada bitmiyor. Yeni sürümler kesinti olmadan çıkıyor, bir şey bozulursa haberim oluyor, verilerin düzenli yedekleniyor. Gerçek kullanıcılardan gelen geri bildirimler, sırada neyi iyileştireceğimizi belirliyor.',
          outcomes: [
            'Yayına alma ve otomatik güncellemeler (CI/CD)',
            'Hata ve performans takibi (izleme)',
            'Yedekleme, güvenlik güncellemeleri ve düzenli bakım'
          ]
        }
      ],
      outcomeLabel: 'Ortaya çıkan',
      workTitle: 'Deneyim',
      work: [
        { years: '2026 – şimdi', role: 'Ürün mühendisi', place: 'Serbest' },
        { years: '2024 – 2026', role: 'Yazılım mühendisi', place: 'Qkare' },
        { years: '2023 – 2024', role: 'Yazılım mühendisi', place: 'Optimus Yazılım' },
        { years: '2021 – 2022', role: 'Yazılım mühendisi', place: 'Borda Technology' },
        { years: '2019 – 2021', role: 'Yazılım mühendisi', place: 'ComeOn Group' },
        { years: '2017 – 2019', role: 'Yazılım mühendisi', place: 'Gülenayva' },
        { years: '2013 – 2016', role: 'Harita mühendisi', place: 'Infotech' }
      ],
      findTitle: 'Bağlantılar'
    },
    hire: {
      title: 'Metin Süt ile çalışın | MVP, web ve mobil uygulama',
      description:
        'MVP, web ve mobil uygulama, yönetim paneli, kullanıcı deneyimi iyileştirme ve yapay zeka özellikleri; sorunu anlamaktan yayına kadar tek kişiyle.',
      headline: 'Birlikte çalışalım',
      intro:
        'Bir ürün yaptırmak ya da mevcut ürününü iyileştirmek isteyen girişimciler ve küçük ekiplerle çalışıyorum. Ürün analizi, tasarım, frontend, mobil ve backend geliştirmeyi ben üstleniyorum; fikrinle yayın arasında tek bir kişi var.',
      services: [
        {
          title: 'İlk sürüm',
          body: 'Bir fikrin var ve kullanıcıların önüne koyabileceğin bir MVP’ye ihtiyacın var. Kapsamı birlikte netleştiriyoruz, sonra web ya da mobil, frontend’den backend’e kadar tasarlayıp geliştiriyorum.'
        },
        {
          title: 'Web uygulamaları, yönetim panelleri ve otomasyonlar',
          body: 'Ekibinin her gün açtığı araçlar: paneller, yönetim ekranları ve elle yapılan işleri ortadan kaldıran entegrasyonlar.'
        },
        {
          title: 'Mevcut ürünün kullanıcı deneyimi',
          body: 'Kullanıcılar bir yerde takılıyorsa ya da arayüz zamanla dağıldıysa akışları inceliyor, önlerindeki engelleri kaldırıyor ve alttaki frontend’i toparlıyorum: design system, state, performans.'
        },
        {
          title: 'Yapay zeka özellikleri',
          body: 'Ürününe eklenen arama, özetleme, asistan ve otomasyonlar; kullanıcılarına gerçekten zaman kazandıran yerlerde.'
        }
      ],
      ctaTitle: 'Ne yapmak istediğini anlat',
      ctaBody: 'Fikri ve ne zaman ihtiyacın olduğunu anlatan birkaç satır başlamak için yeterli.',
      ctaButton: 'E-posta gönder',
      ctaSubject: 'Bir proje',
      ctaAlt: 'ya da LinkedIn’den yaz'
    },
    footer: 'İstanbul'
  }
};
