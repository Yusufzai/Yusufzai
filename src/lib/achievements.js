// Single source of truth for every certification.
//
// Two separate images by design:
// - `cardImage`  — the stylized text-card graphic used on the homepage grid
//                  (an intentional design choice, not a placeholder).
// - `image`      — the real certificate scan, shown on the detail page.

export const achievements = [
  {
    slug: "php-certificate",
    name: "PHP Certification",
    issuer: "Adore",
    year: "2016",
    cardImage: "/images/php-certificate.png",
    image: "/images/certificate-php.jpeg",
    imageWidth: 1600,
    imageHeight: 1138,
    // pdf: "/certificates/php-certificate.pdf",
  },
  {
    slug: "java-certificate",
    name: "Java Certification",
    issuer: "UPTEC Computer Consultancy Ltd.",
    year: "2015",
    cardImage: "/images/java-certificate.png",
    image: "/images/certificate-java.jpeg",
    imageWidth: 1138,
    imageHeight: 1600,
    // pdf: "/certificates/java-certificate.pdf",
  },
  {
    slug: "c-certificate",
    name: "C Certification",
    issuer: "UPTEC Computer Consultancy Ltd.",
    year: "2015",
    cardImage: "/images/c-certificate.png",
    image: "/images/certificate-C.jpeg",
    imageWidth: 1138,
    imageHeight: 1600,
    // pdf: "/certificates/c-certificate.pdf",
  },
  {
    slug: "cpp-certificate",
    name: "C++ Certification",
    issuer: "UPTEC Computer Consultancy Ltd.",
    year: "2015",
    cardImage: "/images/cpp-certificate.png",
    image: "/images/certificate-CPP.jpeg",
    imageWidth: 1138,
    imageHeight: 1600,
    // pdf: "/certificates/cpp-certificate.pdf",
  },
];

export function getAchievement(slug) {
  return achievements.find((a) => a.slug === slug);
}
