// All site content lives here. Everything else is presentation.
// In `authors`, wrap a name in **double asterisks** to render it bold.

export const profile = {
  name: "Stephen Dorn",
  role: "PhD Student",
  affiliation: "Computational Medicine, UCLA",
  affiliationLink: "https://compmed.ucla.edu/",
  photo: "/images/people/scholar-photo.jpg",
  email: "stephendorn@g.ucla.edu",
  intro:
    "I am a PhD student at UCLA in the Computational Medicine Department, where I build statistical methods for human genetics — and apply them to understand how genetic variation shapes disease.",
};

export const social = [
  { name: "twitter", label: "X / Twitter", href: "https://x.com/stphn_drn" },
  { name: "github", label: "GitHub", href: "https://github.com/svdorn" },
  {
    name: "googlescholar",
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=Ysb-abIAAAAJ&hl=en",
  },
  {
    name: "cv",
    label: "CV",
    href: "https://drive.google.com/file/d/1ScfRk0WPFAfNrYYp9gYyvyTOc4IO4erU/view?usp=sharing",
  },
  { name: "email", label: "Email", href: "mailto:stephendorn@g.ucla.edu" },
];

export const research = [
  {
    name: "Impact of Genomic Variation on Function",
    description:
      "Integrating molecular phenotypes with GWAS to identify important genes and pathways for human disease",
  },
  {
    name: "Neurological Disease",
    description:
      "Applying statistical genetics approaches to study neurological disease and the role of Tandem Repeats in neurological disease",
  },
  {
    name: "Genetic Risk Prediction",
    description:
      "Predicting disease risk using genetic information through development of Polygenic Risk Score (PRS) methodology",
  },
];

export const software = [
  {
    name: "GSUB",
    link: "https://github.com/qlu-lab/GSUB",
    description: "A close-form approach to performing GWAS-by-subtraction",
  },
  {
    name: "PENGUIN",
    link: "https://github.com/qlu-lab/PENGUIN",
    description:
      "Controlling for polygenic genetic confounding in epidemiologic association analysis",
  },
  {
    name: "PUMAS",
    link: "https://github.com/qlu-lab/PUMAS",
    description:
      "A tool for polygenic risk score model fine-tuning and ensemble learning using GWAS summary statistics",
  },
];

export const publications = [
  {
    year: 2026,
    name: "Causal effect heterogeneity estimation using summary statistics",
    link: "https://doi.org/10.21203/rs.3.rs-8589460/v1",
    authors:
      "X Shi, Y Yang, M Bai, J Miao, **S Dorn**, J Haugstad, J Liu, Q Lu",
    journal: "Submitted — preprint available",
    preprint: "https://doi.org/10.21203/rs.3.rs-8589460/v1",
  },
  {
    year: 2025,
    name: "Genetic basis of partner choice",
    link: "https://doi.org/10.1101/2025.02.03.636375",
    authors:
      "Q Zheng*, S van Alten*, T Lyngstad*, E Ciscato*, Z Sun, J Miao, Y Wu, **S Dorn**, B Zheng, A Havdahl, E Corfield, M Nivard, T Galama, P Turley, P Chiappori, JM Fletcher, Q Lu",
    journal: "Submitted — preprint on bioRxiv",
    preprint: "https://doi.org/10.1101/2025.02.03.636375",
  },
  {
    year: 2025,
    name: "One score to rule them all: regularized ensemble polygenic risk prediction with GWAS summary statistics",
    link: "https://doi.org/10.1101/2024.11.27.625748",
    authors: "Z Zhao*, **S Dorn***, Y Wu, X Yang, J Jin, Q Lu",
    journal: "Submitted — preprint on bioRxiv",
    preprint: "https://doi.org/10.1101/2024.11.27.625748",
    software: { name: "PUMAS", link: "https://github.com/qlu-lab/PUMAS" },
  },
  {
    year: 2025,
    name: "Enhancing the discriminatory power of polygenic scores for ADHD and autism in clinical and non-clinical samples",
    link: "https://jneurodevdisorders.biomedcentral.com/articles/10.1186/s11689-025-09620-w",
    authors: "J Li, Q He, **S Dorn**, Z Wang, Q Lu",
    journal: "Journal of Neurodevelopmental Disorders",
    published_journal:
      "https://jneurodevdisorders.biomedcentral.com/articles/10.1186/s11689-025-09620-w",
    preprint: "https://www.medrxiv.org/content/10.1101/2022.02.09.22270697v1",
  },
  {
    year: 2024,
    name: "Controlling for polygenic genetic confounding in epidemiologic association studies",
    link: "https://www.pnas.org/doi/10.1073/pnas.2408715121",
    authors: "Z Zhao, X Yang, **S Dorn**, J Miao, SH Barcellos, JM Fletcher, Q Lu",
    journal: "Proceedings of the National Academy of Sciences (PNAS)",
    featured: true,
    published_journal: "https://www.pnas.org/doi/10.1073/pnas.2408715121",
    preprint: "https://www.biorxiv.org/content/10.1101/2024.02.12.579913v1",
    software: { name: "PENGUIN", link: "https://github.com/qlu-lab/PENGUIN" },
  },
  {
    year: 2024,
    name: "Pervasive biases in proxy GWAS based on parental history of Alzheimer’s disease",
    link: "https://www.nature.com/articles/s41588-024-01963-9",
    authors:
      "Y Wu*, Z Sun*, Q Zheng, J Miao, **S Dorn**, S Mukherjee, JM Fletcher, Q Lu",
    journal: "Nature Genetics",
    featured: true,
    published_journal: "https://www.nature.com/articles/s41588-024-01963-9",
    preprint: "https://www.biorxiv.org/content/10.1101/2023.10.13.562272v1",
    software: { name: "GSUB", link: "https://github.com/qlu-lab/GSUB" },
  },
];

export const navItems = [
  { name: "Research", link: "#research" },
  { name: "Publications", link: "#publications" },
  { name: "Software", link: "#software" },
  { name: "Contact", link: "#contact" },
];
