//this file represents a way of saving data in jsx (as if we are fetching)
import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bag1,
  bag2,
  bag3,
  bag4,
  bag5,
  bag6,
  bag7,
  bag8,
  bag9,
  customer1,
  customer2,
} from "../assets/images";

export const navLinks = [
  //we can map over navlinks instead of writing them one by one
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const bags = [
  {
    thumbnail: bag1,
    bigBag: bag1,
  },
  {
    thumbnail: bag2,
    bigBag: bag2,
  },
  {
    thumbnail: bag5,
    bigBag: bag5,
  },
];

export const products = [
  {
    imgURL: bag8,
    name: "kango-01",
    price: "$200.20",
    rating: "4",
  },
  {
    imgURL: bag9,
    name: "CHHC-1911",
    price: "$210.20",
    rating: "4.5",
  },
  {
    imgURL: bag7,
    name: "COACH-0012",
    price: "$220.20",
    rating: "5",
  },
  {
    imgURL: bag6,
    name: "DGMK-223",
    price: "$230.20",
    rating: "4.75",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext:
      "Our dedicated team is here to assist you every step of the way through the process.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Moris Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Smith",
    rating: 4.7,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Gucci ", link: "/" },
      { name: "Louis Vuitton", link: "/" },
      { name: "Coach", link: "/" },
      { name: "Aldo", link: "/" },
      { name: "Nine West", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@fiora.com", link: "mailto:customer@fiora.com" },
      { name: "Fiora&Co", link: "tel:+123 456 789" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
