/** Static faculty & department data for Government Superior Science College Peshawar. */

export interface Department {
  id: string;
  name: string;
  facultyCategory: 'Physical Sciences' | 'Biological Sciences' | 'Social Sciences & Humanities' | 'Support Services';
  overview: string;
  programs: string[];
}

export interface FacultyMember {
  id: string;
  deptId: string;
  name: string;
  designation: string;
  specialization: string;
  email: string;
  photo: string;
  qualification: string;
  biography: string;
  researchInterests: string[];
  publications: string[];
  googleScholar?: string;
  linkedin?: string;
  contactInfo: string;
}

const INSTITUTION = 'Government Superior Science College Peshawar';

/** Build public URL for portraits in public/faculty/faculty pic/ */
export function facultyPhotoUrl(filename: string): string {
  if (!filename) return '';
  return `/faculty/faculty%20pic/${encodeURIComponent(filename)}`;
}

function linkOrUndefined(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const v = value.trim();
  if (!v || /^(nil|n\/?a|na|no|none)$/i.test(v)) return undefined;
  if (v.startsWith('http://') || v.startsWith('https://')) return v;
  return undefined;
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'physics',
    name: 'BS Physics',
    facultyCategory: 'Physical Sciences',
    overview:
      'Physics at GSSC covers classical and modern topics with laboratory work aligned to University of Peshawar BS requirements, including computational and materials-oriented electives.',
    programs: ['BS Physics (4 Years)', 'FSc Pre-Engineering support'],
  },
  {
    id: 'chemistry',
    name: 'BS Chemistry',
    facultyCategory: 'Physical Sciences',
    overview:
      'Chemistry programmes emphasise foundational theory and practical laboratory skills for intermediate and undergraduate science students.',
    programs: ['BS Chemistry (4 Years)', 'FSc Pre-Medical / Pre-Engineering support'],
  },
  {
    id: 'mathematics',
    name: 'BS Mathematics',
    facultyCategory: 'Physical Sciences',
    overview:
      'Mathematics faculty teach pure and applied courses including computational methods, fluid mechanics, and numerical analysis for BS and intermediate pathways.',
    programs: ['BS Mathematics (4 Years)', 'FSc / BSc mathematics support'],
  },
  {
    id: 'statistics',
    name: 'BS Statistics',
    facultyCategory: 'Physical Sciences',
    overview:
      'Statistics focuses on biostatistics, computational methods, and applied inference for social, medical, and research applications.',
    programs: ['BS Statistics (4 Years)'],
  },
  {
    id: 'computer-science',
    name: 'BS Computer Science',
    facultyCategory: 'Physical Sciences',
    overview:
      'Computer Science pathways support ICT literacy and degree-level computing aligned with HED admission notices and University of Peshawar regulations.',
    programs: ['BS Computer Science (4 Years)', 'FSc Computer Science support'],
  },
  {
    id: 'botany',
    name: 'BS Botany',
    facultyCategory: 'Biological Sciences',
    overview:
      'Botany delivers plant science teaching with emphasis on physiology, tissue culture awareness, and laboratory practice for life-science careers.',
    programs: ['BS Botany (4 Years)', 'FSc Pre-Medical support'],
  },
  {
    id: 'zoology',
    name: 'BS Zoology',
    facultyCategory: 'Biological Sciences',
    overview:
      'Zoology covers animal biology, wildlife, entomology, and molecular themes with field and laboratory components for BS and intermediate students.',
    programs: ['BS Zoology (4 Years)', 'FSc Pre-Medical support'],
  },
  {
    id: 'english',
    name: 'BS English',
    facultyCategory: 'Social Sciences & Humanities',
    overview:
      'English studies span literature, linguistics, and language pedagogy, preparing students for teaching, research, and communication careers.',
    programs: ['BS English (4 Years)', 'FA / BA English support'],
  },
  {
    id: 'economics',
    name: 'BS Economics',
    facultyCategory: 'Social Sciences & Humanities',
    overview:
      'Economics offers undergraduate grounding in economic theory and applied analysis under Higher Education Department postings at GSSC.',
    programs: ['BS Economics (4 Years)'],
  },
  {
    id: 'pakistan-studies',
    name: 'BS Pakistan Studies',
    facultyCategory: 'Social Sciences & Humanities',
    overview:
      'Pakistan Studies explores history, society, and contemporary issues for intermediate and BS students affiliated with the University of Peshawar.',
    programs: ['BS Pakistan Studies (4 Years)', 'FA / BA Pakistan Studies support'],
  },
  {
    id: 'pashto',
    name: 'Pashto Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview:
      'Pashto language and literature teaching with research strength in fiction, modernism, translation, and cultural studies.',
    programs: ['Pashto literature & language courses'],
  },
  {
    id: 'islamic-studies',
    name: 'Islamic Studies',
    facultyCategory: 'Social Sciences & Humanities',
    overview:
      'Islamic Studies covers jurisprudence, history, Hadith, and related disciplines for degree and intermediate humanities pathways.',
    programs: ['Islamic Studies / Islamiat courses'],
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'asif-iqbal',
    deptId: 'economics',
    name: 'Asif Iqbal',
    designation: 'Associate Professor',
    specialization: 'Economics',
    email: 'imeconomist76@gmail.com',
    photo: facultyPhotoUrl('asif iqbal.jpg'),
    qualification: 'M.Phil (Economics)',
    biography: 'Associate Professor of Economics serving at Government Superior Science College, Peshawar under the Higher Education Department.',
    researchInterests: [],
    publications: [],
    contactInfo: `Government Superior Science College, Peshawar`,
  },
  {
    id: 'dr-m-anwar-khan-aurakzai',
    deptId: 'pashto',
    name: 'Dr. M. Anwar Khan Aurakzai',
    designation: 'Chairman, Pashto Department',
    specialization: 'Pashto fiction (Modernism & Postmodernism)',
    email: 'anwaraurakzai1@gmail.com',
    photo: facultyPhotoUrl('Dr. M.Anwar Khan Aurakzai.jpg'),
    qualification: 'PhD',
    biography:
      'PhD in Pashto fiction (Modernism & Postmodernism). Writer, researcher, and translator (UN, US, GIZ); translator of The History of Civilization by Will Durant; subtitles writer of various Pashto songs. Chairman, Pashto Department, Government Superior Science College Peshawar.',
    researchInterests: ['Fiction', 'Modernism and Postmodernism in Pashto fiction'],
    publications: [],
    contactInfo: INSTITUTION,
  },
  {
    id: 'dr-mian-asadullah',
    deptId: 'islamic-studies',
    name: 'Dr Mian Asadullah',
    designation: 'Assistant Professor',
    specialization: 'Islamic Jurisprudence',
    email: 'mianasadullah1234@gmail.com',
    photo: facultyPhotoUrl('Dr Mian Asadullah.jpg'),
    qualification: 'PhD',
    biography: 'PhD degree holder whose research area is Islamic Jurisprudence. Assistant Professor of Islamic Studies at GSSC Peshawar.',
    researchInterests: ['Islamic Jurisprudence'],
    publications: [],
    contactInfo: `Department of Islamic Studies, ${INSTITUTION}`,
  },
  {
    id: 'asif-khan',
    deptId: 'physics',
    name: 'Asif Khan',
    designation: 'Assistant Professor',
    specialization: 'Materials Modeling, DFT, Material Science',
    email: 'asifkhan8230@gmail.com',
    photo: facultyPhotoUrl('Asif Khan.png'),
    qualification: 'PhD Scholar',
    biography:
      'Assistant Professor of Physics and PhD Scholar in Materials Modeling, DFT, and Material Science at Government Superior Science College Peshawar.',
    researchInterests: [
      'Materials Modeling',
      'Density Functional Theory',
      'Material Science',
      'Computational Physics',
      'WIEN2K',
    ],
    publications: [
      'First-principles study on structural, electronic, optical and thermal properties of halide double perovskite Rb2InCuX6 (X = F, Cl and Br)',
      'Temperature-dependent energy storage characterization of Pb-free relaxor ferroelectrics',
    ],
    contactInfo: INSTITUTION,
  },
  {
    id: 'muhammad-shahnawaz',
    deptId: 'statistics',
    name: 'Muhammad Shahnawaz',
    designation: 'Lecturer',
    specialization: 'Medical Science (Bio Statistics)',
    email: 'khanshahnawaz176@gmail.com',
    photo: facultyPhotoUrl('Muhammad Shahnawaz.jpg'),
    qualification: 'M.Phil in Statistics',
    biography:
      'Muhammad Shahnawaz holds an M.Phil in Statistics from Agricultural University of Peshawar and serves as Lecturer at Government Superior Science College Peshawar.',
    researchInterests: ['Medical Science (Bio Statistics)'],
    publications: [],
    contactInfo: INSTITUTION,
  },
  {
    id: 'syed-wasim-abbas-shah',
    deptId: 'statistics',
    name: 'Syed Wasim Abbas Shah',
    designation: 'Assistant Professor',
    specialization: 'Medical Science (Bio Statistics)',
    email: 'wasim.abbas.wa78@gmail.com',
    photo: facultyPhotoUrl('SYED WASIM ABBAS SHAH.jpg'),
    qualification: 'M.Phil in Statistics',
    biography:
      'Syed Wasim Abbas Shah holds an M.Phil in Statistics from Islamia College University Peshawar and serves as Assistant Professor at Govt Superior Science College Peshawar.',
    researchInterests: ['Medical Science (Bio Statistics)'],
    publications: [],
    contactInfo: 'Govt Superior Science College Peshawar',
  },
  {
    id: 'wajid-khan',
    deptId: 'mathematics',
    name: 'Wajid Khan',
    designation: 'Assistant Professor of Mathematics',
    specialization: 'Computational / Numerical Mathematics',
    email: 'wjdkhan206@gmail.com',
    photo: facultyPhotoUrl('Wajid Khan.jpg'),
    qualification: 'PhD',
    biography:
      'PhD in applied computational Mathematics from University of Engineering and Technology Peshawar. Assistant Professor of Mathematics at Govt Superior Science College Peshawar.',
    researchInterests: ['Computational / Numerical Mathematics'],
    publications: [],
    contactInfo: 'Govt Superior Science College Peshawar',
  },
  {
    id: 'dr-usman-ali',
    deptId: 'mathematics',
    name: 'Dr. Usman Ali',
    designation: 'Professor of Mathematics',
    specialization: 'Fluid mechanics',
    email: 'usmanali152221@gmail.com',
    photo: facultyPhotoUrl('Dr.Usman Ali.jpg'),
    qualification: 'PhD in Applied Mathematics',
    biography:
      'Professor of Mathematics (BPS 20) with a PhD in fluid mechanics, teaching applied mathematics at Government Superior Science College Peshawar.',
    researchInterests: ['Fluid mechanics'],
    publications: [
      'Motile Microorganisms Hybrid Nano liquid flow with the influence of activation energy and Heat source over a Rotating Disk',
    ],
    contactInfo: INSTITUTION,
  },
  {
    id: 'habib-ullah',
    deptId: 'zoology',
    name: 'Mr. Habib Ullah',
    designation: 'Lecturer',
    specialization: 'Medical and Applied Entomology, Molecular Biology and Systematics',
    email: 'uhabib239@gmail.com',
    photo: facultyPhotoUrl('Mr. Habib Ullah.jpg'),
    qualification: 'M.Phil in Zoology',
    biography:
      'A dedicated Lecturer in Zoology with over five years of experience in the Higher Education Department of Khyber Pakhtunkhwa. Expertise in Entomology, Molecular Biology, Genetics and Systematics. Strongly committed to academic excellence and innovative research.',
    researchInterests: ['Medical and Applied Entomology', 'Molecular Biology', 'Systematics'],
    publications: [
      'Afridi, K. K., Ullah, H., Zaidi, F., et al. (2023). Diversity and species composition of ixodid ticks in District Khyber, Khyber Pakhtunkhwa, Pakistan. International Journal of Agriculture and Biology, 19(1), 161–168.',
      'Arif, M., Rasheed, S. B., Ullah, H., et al. (2024). Feeding behavior and Plasmodium detection in Anopheles stephensi, a malaria vector in District Khyber. Iranian Journal of Parasitology, 19(3), 333.',
      'Haider, I., Ullah, H., et al. (2024). Investigating aquaculture management practices and challenges in selective aquaculture hatcheries across Khyber Pakhtunkhwa. Egyptian Journal of Aquatic Biology and Fisheries, 28(1), 1861–1876.',
      'Jan, A., Zaidi, F., et al. (2024). Assessment of artificial breeding success of rainbow trout in Jaghour Trout Hatchery, Chitral. Iranian Journal of Fisheries Sciences, 24(1), 85–97.',
      'Saima, Burni, T., Khan, R., Jamal, M., & Ullah, H. (2025). Anti-inflammatory, anti-diabetic and larvicidal activity of Viburnum cotinifolium. Journal of Population Therapeutics and Clinical Pharmacology, 31(5), 2284–2293.',
    ],
    linkedin: linkOrUndefined('https://www.linkedin.com/in/habib-afridi-6a41322aa'),
    contactInfo: `Department of Zoology, ${INSTITUTION}`,
  },
  {
    id: 'farhan-ali',
    deptId: 'english',
    name: 'Farhan Ali',
    designation: 'Lecturer in English',
    specialization: 'Cognitive Linguistics, Media Discourse Analysis, Second Language Acquisition',
    email: 'farhan6366@gmail.com',
    photo: facultyPhotoUrl('Farhan Ali.jpg'),
    qualification: 'M.Phil',
    biography:
      'Ph.D in linguistics scholar at Islamia College Peshawar and alumnus of Government Superior Science College Peshawar. Certified TESOL expert from Virginia State University. Currently Lecturer in English at GSSC Peshawar.',
    researchInterests: ['Cognitive Linguistics', 'Media Discourse Analysis', 'Second Language Acquisition'],
    publications: [
      'The Art of Persuasion: A Cognitive-Linguistic Analysis of Diplomatic Discourse in a Trump-Zelensky Oval Office Meeting',
    ],
    googleScholar: linkOrUndefined('https://scholar.google.com/citations?user=JkjKH7QAAAAJ&hl=en'),
    contactInfo: 'Department of English, GSSC Peshawar',
  },
  {
    id: 'dr-muhammad-shakil-ur-rehman',
    deptId: 'english',
    name: 'Dr Muhammad Shakil Ur Rehman',
    designation: 'Associate Professor of English',
    specialization: 'Literature',
    email: 'shakeelhissam1@gmail.com',
    photo: facultyPhotoUrl('Dr Muhammad Shakil Ur Rehman.png'),
    qualification: 'PhD',
    biography: 'Associate Professor of English with a PhD in English, serving at Government Superior Science College Peshawar.',
    researchInterests: ['Literature'],
    publications: ['Author of multiple publications in English literature (see college records for full list).'],
    contactInfo: 'GSSC Peshawar',
  },
  {
    id: 'dr-ikram-wali',
    deptId: 'islamic-studies',
    name: 'Dr Ikram Wali',
    designation: 'Assistant Professor',
    specialization: 'Islamic History and Hadith wa Usool-e-Hadith',
    email: 'ikramwali91@gmail.com',
    photo: facultyPhotoUrl('Dr Ikram Wali.jpg'),
    qualification: 'PhD Islamic Studies',
    biography: 'PhD degree holder whose field of study and teaching is Islamic Studies at GSSC Peshawar.',
    researchInterests: ['Islamic History', 'Hadith wa Usool-e-Hadith'],
    publications: [],
    contactInfo: 'GSSC Peshawar',
  },
  {
    id: 'zahoor-khan',
    deptId: 'zoology',
    name: 'Zahoor Khan',
    designation: 'Professor',
    specialization: 'Wildlife',
    email: 'zahoor303@gmail.com',
    photo: facultyPhotoUrl('Zahoor Khan.jpg'),
    qualification: 'MPhil Zoology',
    biography:
      'Professor of Zoology, HOD Zoology and BS Coordinator at GSSC Peshawar, with an MPhil in Zoology and research interest in wildlife.',
    researchInterests: ['Wildlife'],
    publications: [],
    contactInfo: 'GSSC Peshawar',
  },
  {
    id: 'muhammad-ahsan-kamal',
    deptId: 'statistics',
    name: 'Muhammad Ahsan Kamal',
    designation: 'Assistant Professor',
    specialization: 'Bio Statistics',
    email: 'Mahsankamal87@gmail.com',
    photo: facultyPhotoUrl('Muhammad Ahsan Kamal.jpg'),
    qualification: 'M.Phil in Statistics',
    biography:
      'Muhammad Ahsan Kamal holds an M.Phil in Statistics from Islamia College University Peshawar and serves as Assistant Professor at Govt Superior Science College Peshawar.',
    researchInterests: ['Bio Statistics'],
    publications: [],
    contactInfo: 'Govt Superior Science College Peshawar',
  },
  {
    id: 'saqib-ali-khan',
    deptId: 'botany',
    name: 'Saqib Ali Khan',
    designation: 'Lecturer',
    specialization: 'Plant physiology',
    email: 'Khattaksaqib444@gmail.com',
    photo: facultyPhotoUrl('Saqib Ali Khan.jpg'),
    qualification: 'MSc Botany',
    biography: 'Serving as Botany lecturer at GSSC Peshawar with focus on plant physiology.',
    researchInterests: ['Plant physiology'],
    publications: [],
    contactInfo: 'GSSC Peshawar',
  },
  {
    id: 'sahib-noor',
    deptId: 'physics',
    name: 'Sahib Noor',
    designation: 'Assistant Professor (BPS 18)',
    specialization: 'High Energy Physics',
    email: 'letsmailsahib@gmail.com',
    photo: facultyPhotoUrl('Sahib Noor.jpg'),
    qualification: 'MPhil in Physics',
    biography:
      'MSc and MPhil in High Energy Physics from Quaid-i-Azam University, Islamabad. Working as an Assistant Professor of Physics since 2021 at GSSC Peshawar.',
    researchInterests: ['High Energy Physics'],
    publications: ['Three publications in High Energy Physics'],
    contactInfo: 'Physics Department, GSSC Peshawar',
  },
  {
    id: 'dr-shafiq-ahmad-yousafzai',
    deptId: 'mathematics',
    name: 'Dr. Shafiq Ahmad Yousafzai',
    designation: 'Assistant Professor',
    specialization: 'Computational Fluid Dynamics (CFD)',
    email: 'Shafiqahmad102@gmail.com',
    photo: facultyPhotoUrl('Dr. Shafiq Ahmad Yousafzai.jpg'),
    qualification: 'Doctor of Philosophy',
    biography:
      'Assistant Professor of Applied Mathematics with a PhD specializing in Computational Fluid Dynamics (CFD). Core expertise includes advanced fluid mechanics simulations, exact solutions, numerical analysis, Mathcad, MATLAB, Python, and LaTeX.',
    researchInterests: [
      'Computational Fluid Dynamics (CFD)',
      'Exact solutions',
      'Physics-Informed Neural Networks (PINNs)',
      'Fractional derivative modeling',
      'Numerical heat transfer simulations',
    ],
    publications: [
      'Couple stress Casson ternary hybrid nanofluids in a channel with applications in medical sciences',
    ],
    linkedin: linkOrUndefined('https://www.linkedin.com/in/shafiq-ahmad-840667a1/'),
    contactInfo: 'Govt. Superior Science College Peshawar',
  },
  {
    id: 'dr-danish-wasim',
    deptId: 'statistics',
    name: 'Dr. Danish Wasim',
    designation: 'Assistant Professor',
    specialization: 'Robust Ridge Regression, Penalized Estimation, Machine Learning',
    email: 'danishwasim.std@icp.edu.pk',
    photo: facultyPhotoUrl('Danish Wasim.jpg'),
    qualification: 'PhD (Computational Statistics)',
    biography:
      'Assistant Professor of Statistics at Government Superior Science College (GSSC), Peshawar, with a Ph.D. in Statistics from Islamia College Peshawar. Active researcher and supervisor of Ph.D. and M.Phil. scholars, with teaching experience at various universities and institutions.',
    researchInterests: [
      'Ridge Regression',
      'Robust Ridge Regression',
      'Heteroscedastic Ridge Regression',
      'Machine Learning',
      'Penalized Estimation',
      'Multicollinearity',
      'Robust M-Estimators',
    ],
    publications: ['48 publications — see Google Scholar profile for the full list.'],
    googleScholar: linkOrUndefined(
      'https://scholar.google.com/citations?user=eDn7c3EAAAAJ&hl=en&oi=ao',
    ),
    contactInfo: `Department of Statistics, ${INSTITUTION}`,
  },
  {
    id: 'ibrahim-babar',
    deptId: 'botany',
    name: 'Ibrahim Babar',
    designation: 'Lecturer',
    specialization: 'Plant physiology and tissue culture',
    email: '13579dolso@gmail.com',
    photo: facultyPhotoUrl('Ibrahim Babar.jpg'),
    qualification: 'M.Sc Botany',
    biography: 'Lecturer of Botany at GSSC Peshawar with interests in plant physiology and tissue culture.',
    researchInterests: ['Plant physiology', 'Tissue culture'],
    publications: [],
    contactInfo: 'GSSC Peshawar',
  },
  {
    id: 'ijaz-rahim',
    deptId: 'pakistan-studies',
    name: 'Ijaz Rahim',
    designation: 'Assistant Professor',
    specialization: 'Social change and contemporary social issues',
    email: 'ijaz.rahim2013@gmail.com',
    photo: facultyPhotoUrl('ijaz rahim.jpg'),
    qualification: 'Masters',
    biography:
      'Master’s graduate and dedicated educator. Enjoys reading and sports which contribute to personal and professional growth. Aims to make a positive impact through teaching at GSSC Peshawar.',
    researchInterests: ['Social change and contemporary social issues'],
    publications: [],
    contactInfo: 'GSSC Peshawar',
  },
  {
    id: 'ali-ahmad',
    deptId: 'english',
    name: 'Ali Ahmad',
    designation: 'Lecturer in English',
    specialization: 'Shakespearean Dramas',
    email: 'waqarkhanaa4992478@gmail.com',
    photo: facultyPhotoUrl('Ali Ahmad.jpg'),
    qualification: 'Masters in English',
    biography: 'Has completed M.A English and Bachelor of Education. Lecturer in English at GSSC Peshawar.',
    researchInterests: ['Shakespearean Dramas'],
    publications: [],
    contactInfo: 'Govt Superior Science College Peshawar',
  },
  {
    id: 'muhammad-jamil',
    deptId: 'english',
    name: 'Muhammad Jamil',
    designation: 'Associate Professor of English',
    specialization: 'Postmodernism, Posthuman Studies, Asian Literature and Critical Theory',
    email: 'muhammadjamil385@gmail.com',
    photo: facultyPhotoUrl('Muhammad Jamil.png'),
    qualification: 'PhD',
    biography:
      'Professor of English with research focus on Postmodernism, Posthuman Studies, Asian Literature and Critical Theory. Interested in the intersections of identity, technology, and narrative. Committed to advancing literary criticism through cross-cultural analysis, deconstructive reading, and critical pedagogy.',
    researchInterests: ['Postmodern literature', 'Posthuman Asian English literature', 'Critical Theory'],
    publications: [
      'See Google Scholar for citation list: https://scholar.google.com/citations?user=PVES0C4AAAAJ&hl=en',
    ],
    googleScholar: linkOrUndefined('https://scholar.google.com/citations?user=PVES0C4AAAAJ&hl=en'),
    linkedin: linkOrUndefined('https://www.linkedin.com/in/muhammad-jamil-65a1b5b5'),
    contactInfo: 'Government Superior Science College Wazir Bagh Peshawar',
  },
];

export function getDepartmentById(deptId: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.id === deptId);
}

export function getFacultyByDept(deptId: string): FacultyMember[] {
  return FACULTY_MEMBERS.filter((m) => m.deptId === deptId);
}

export function getFacultyById(memberId: string): FacultyMember | undefined {
  return FACULTY_MEMBERS.find((m) => m.id === memberId);
}

export type FacultyCategory = Department['facultyCategory'];

export const FACULTY_CATEGORIES: FacultyCategory[] = [
  'Physical Sciences',
  'Biological Sciences',
  'Social Sciences & Humanities',
  'Support Services',
];
