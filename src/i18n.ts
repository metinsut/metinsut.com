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
type Stage = { name: string; body: string };

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
      title: 'Metin Süt, product developer',
      description:
        'Metin Süt is a freelance product developer in Istanbul who takes products from analysis and design through frontend, mobile and backend.',
      headline: 'I turn ideas into products that work, from the first sketch to the release.',
      intro:
        'I’m Metin Süt, a product developer in Istanbul. I take products from analysis and design through frontend, mobile and backend.',
      lead: 'I work on the whole product, not one layer of it. That means fewer handoffs, and less gets lost between them.',
      routeTitle: 'From idea to release',
      route: [
        {
          name: 'Analysis',
          body: 'Who the product is for, what problem it solves and what the first version really needs. I turn that into a scope, user flows and priorities.'
        },
        {
          name: 'Design',
          body: 'Wireframes first, then the interface, then a small design system the code can follow.'
        },
        {
          name: 'Frontend and mobile',
          body: 'I design the frontend architecture of web and mobile apps: modular, scalable and easy to change as the product grows, with several apps on one shared base when the product needs it.'
        },
        {
          name: 'Backend',
          body: 'The APIs, databases and integrations behind the interface, with Node.js, Bun and PostgreSQL.'
        }
      ],
      workTitle: 'Work',
      work: [
        { years: '2026 – now', role: 'Product developer', place: 'Freelance' },
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
      title: 'Hire Metin Süt',
      description:
        'MVPs, web and mobile apps, admin panels, UX improvements and AI features, from analysis to backend, by one person.',
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
      title: 'Metin Süt, ürün geliştirici',
      description:
        'Metin Süt, İstanbul’da serbest çalışan bir ürün geliştirici. Ürünleri analiz ve tasarımdan frontend, mobil ve backend geliştirmeye kadar uçtan uca yürütüyor.',
      headline: 'Fikirleri baştan sona, çalışan ürünlere dönüştürüyorum.',
      intro:
        'Ben Metin Süt, İstanbul’da ürün geliştiriciyim. Ürünleri analiz ve tasarımdan frontend, mobil ve backend geliştirmeye kadar uçtan uca yürütüyorum.',
      lead: 'Ürünün tek bir katmanında değil, tamamında çalışıyorum. Böylece devir teslimler azalıyor, aralarda kaybolan şeyler de.',
      routeTitle: 'Fikirden yayına',
      route: [
        {
          name: 'Analiz',
          body: 'Ürün kimin için, hangi sorunu çözüyor, ilk sürümde gerçekten ne olmalı? Bunları kapsama, kullanıcı akışlarına ve önceliklere dönüştürüyorum.'
        },
        {
          name: 'Tasarım',
          body: 'Önce wireframe, sonra arayüz, ardından kodun takip edebileceği küçük bir design system.'
        },
        {
          name: 'Frontend ve mobil',
          body: 'Web ve mobil uygulamaların frontend mimarisini kuruyorum: modüler, ölçeklenebilir ve ürün büyüdükçe kolayca değiştirilebilen yapılar; gerektiğinde birden fazla uygulamayı ortak bir altyapıda topluyorum.'
        },
        {
          name: 'Backend',
          body: 'Arayüzün arkasındaki API’ler, veritabanları ve entegrasyonlar; Node.js, Bun ve PostgreSQL ile.'
        }
      ],
      workTitle: 'Deneyim',
      work: [
        { years: '2026 – şimdi', role: 'Ürün geliştirici', place: 'Serbest' },
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
      title: 'Metin Süt ile çalışın',
      description:
        'MVP, web ve mobil uygulama, yönetim paneli, kullanıcı deneyimi iyileştirme ve yapay zeka özellikleri; analizden backend’e kadar tek kişiyle.',
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
