/** Official-style facts: Wikipedia + KP HED public listings (verify phone/email with the college office). */

export const SITE = {
  shortName: 'GSSC Peshawar',
  fullName: 'Government Superior Science College Peshawar',
  tagline:
    'A leading public sector college near historic Wazir Bagh: intermediate, degree, and BS programmes affiliated with the University of Peshawar.',
  established: 1962,
  campusSince: 1972,
  principal: 'Dr. Muhamad Ishaq',
  addressLine: 'Daura Road, Near Wazir Bagh',
  city: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  phone: '091-2563067',
  email: 'gssc.pesh@yahoo.com',
  facebookUrl: 'https://www.facebook.com/gsscpeshawar1/',
  /** Official page photo albums — use for gallery CTAs (Facebook does not allow stable hotlinks). */
  facebookPhotosUrl: 'https://www.facebook.com/gsscpeshawar1/photos',
  hedAdmissionUrl: 'https://admission.hed.gkp.pk/college.php?college_id=11',
  hedCollegeUrl: 'https://hed.gkp.pk/college/2',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/Government_Superior_Science_College_Peshawar',
  mapQuery: 'Government Superior Science College Peshawar',
  vision:
    'To broaden the horizons of knowledge and enable students to reach the zenith of intellectual achievement and personal growth to the ultimate benefit of human society and beyond.',
} as const;

export const PROGRAMS = {
  intermediate: [
    'FSc Pre-Medical (2 years)',
    'FSc Pre-Engineering (2 years)',
    'FSc Computer Science (2 years)',
    'FA General Science (2 years)',
    'FA Humanities (2 years)',
  ],
  degreeTwoYear: ['BA Humanities (2 years)', 'BSc General & Computer Sciences (2 years)'],
  bsFourYear: [
    'BS Pakistan Studies',
    'BS Statistics',
    'BS Economics',
    'BS English',
    'BS Mathematics',
    'BS Physics',
    'BS Chemistry',
    'BS Botany',
    'BS Zoology',
    'BS Computer Science',
    '…and related disciplines per HED admission notices',
  ],
} as const;
