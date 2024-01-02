-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 01, 2024 lúc 05:53 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `e-commerce`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account_type`
--

CREATE TABLE `account_type` (
  `type_account_id` bigint(20) UNSIGNED NOT NULL,
  `type_account_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account_type`
--

INSERT INTO `account_type` (`type_account_id`, `type_account_name`) VALUES
(1, 'Admin'),
(2, 'Business '),
(3, 'Customer');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

CREATE TABLE `discount` (
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `discount_percent` decimal(11,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `discount`
--

INSERT INTO `discount` (`discount_id`, `name`, `description`, `discount_percent`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Summer Sale', 'Discount for summer season', 15.00, '2023-12-30 15:16:41', '2023-12-30 15:16:41', '2023-12-30 15:16:41'),
(2, 'Clearance', 'Year-end clearance', 20.00, '2023-12-30 15:16:41', '2023-12-30 15:16:41', '2023-12-30 15:16:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `field`
--

CREATE TABLE `field` (
  `field_id` bigint(20) UNSIGNED NOT NULL,
  `field_name` varchar(255) DEFAULT NULL,
  `icon_field` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `field`
--

INSERT INTO `field` (`field_id`, `field_name`, `icon_field`) VALUES
(1, 'Smartphone', 'smart_phone.svg'),
(2, 'E-device', 'electronic_device.svg'),
(3, 'Laptops', 'computers_and_laptops.svg'),
(4, 'Watch', 'watch.svg'),
(5, 'Book', 'book.svg'),
(6, 'Toy', 'toy.svg'),
(7, 'Furniture', 'furniture.svg'),
(8, 'Vehicle', 'vehicle.svg'),
(9, 'Jewelry', 'jewelry.svg'),
(10, 'Houseware', 'houseware.svg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(2, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(3, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(4, '2016_06_01_000004_create_oauth_clients_table', 1),
(5, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(6, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(7, '2023_12_16_072424_account_type', 1),
(8, '2023_12_16_072502_discount', 1),
(9, '2023_12_16_072548_order_status', 1),
(10, '2023_12_16_072602_payment_type', 1),
(11, '2023_12_22_125128_create_password_reset_tokens_table', 1),
(12, '2023_12_22_125237_creat_failed_jobs_table', 1),
(13, '2023_12_25_002257_field', 1),
(14, '2023_12_25_003335_product_brand', 1),
(15, '2023_12_27_092239_product_category', 1),
(16, '2023_12_27_092601_product_color', 1),
(17, '2023_12_27_092646_product_size', 1),
(18, '2023_12_27_092741_shipping_method', 1),
(19, '2023_12_27_092805_user', 1),
(20, '2023_12_27_092947_user_address', 1),
(21, '2023_12_27_093024_user_payment', 1),
(22, '2023_12_27_093255_user_review', 1),
(23, '2023_12_27_093503_order', 1),
(24, '2023_12_27_093529_product', 1),
(25, '2023_12_27_093619_order_items', 1),
(26, '2023_12_27_093653_product_image', 1),
(27, '2023_12_27_093726_shopping_cart', 1),
(28, '2023_12_27_093814_transaction', 1),
(29, '2023_12_27_093851_product_review', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `order_status_id` bigint(20) UNSIGNED NOT NULL,
  `shipping_method_id` bigint(20) UNSIGNED NOT NULL,
  `total` decimal(11,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`order_id`, `user_id`, `order_status_id`, `shipping_method_id`, `total`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1599.98, '2023-12-30 15:16:43', '2023-12-30 15:16:43'),
(2, 2, 2, 2, 89.94, '2023-12-30 15:16:43', '2023-12-30 15:16:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `order_items_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_status`
--

CREATE TABLE `order_status` (
  `order_status_id` bigint(20) UNSIGNED NOT NULL,
  `order_status_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_status`
--

INSERT INTO `order_status` (`order_status_id`, `order_status_name`) VALUES
(1, 'Processing'),
(2, 'Shipped'),
(3, 'Delivered');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payment_type`
--

CREATE TABLE `payment_type` (
  `payment_type_id` bigint(20) UNSIGNED NOT NULL,
  `payment_type_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `payment_type`
--

INSERT INTO `payment_type` (`payment_type_id`, `payment_type_name`) VALUES
(1, 'Credit Card'),
(2, 'PayPal');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `color_id` bigint(20) UNSIGNED NOT NULL,
  `size_id` bigint(20) UNSIGNED NOT NULL,
  `created_by_user_id` int(11) DEFAULT NULL,
  `product_brand_id` bigint(20) UNSIGNED NOT NULL,
  `product_category_id` bigint(20) UNSIGNED NOT NULL,
  `price` decimal(11,2) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `discount_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_brand`
--

CREATE TABLE `product_brand` (
  `product_brand_id` bigint(20) UNSIGNED NOT NULL,
  `field_id` bigint(20) UNSIGNED NOT NULL,
  `product_brand_name` varchar(50) NOT NULL,
  `description` text DEFAULT NULL,
  `logo` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_brand`
--

INSERT INTO `product_brand` (`product_brand_id`, `field_id`, `product_brand_name`, `description`, `logo`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Samsung', 'Leading technology company in electronics', 'samsung_logo.png', '2023-05-19 02:30:00', '2023-05-19 02:30:00', NULL),
(2, 1, 'Apple', 'Innovative products and design', 'apple_logo.png', '2023-05-20 08:45:00', '2023-05-20 08:45:00', NULL),
(3, 1, 'Huawei', 'Global provider of information and communications technology', 'huawei_logo.png', '2023-05-21 05:00:00', '2023-05-21 05:00:00', NULL),
(4, 1, 'Xiaomi', 'Chinese electronics company', 'xiaomi_logo.png', '2023-05-22 11:30:00', '2023-05-22 11:30:00', NULL),
(5, 1, 'Sony', 'Multinational conglomerate corporation', 'sony_logo.png', '2023-05-23 03:10:00', '2023-05-23 03:10:00', NULL),
(6, 1, 'OnePlus', 'Never Settle - Flagship Killer', 'oneplus_logo.png', '2023-05-24 07:00:00', '2023-05-24 07:00:00', NULL),
(7, 1, 'Google Pixel', 'Devices designed around you', 'google_pixel_logo.png', '2023-05-25 02:00:00', '2023-05-25 02:00:00', NULL),
(8, 1, 'Motorola', 'Innovative technology for a better tomorrow', 'motorola_logo.png', '2023-05-26 08:15:00', '2023-05-26 08:15:00', NULL),
(9, 1, 'Nokia', 'Connecting People', 'nokia_logo.png', '2023-05-27 05:30:00', '2023-05-27 05:30:00', NULL),
(10, 1, 'BlackBerry', 'Intelligent Security. Everywhere.', 'blackberry_logo.png', '2023-05-28 10:45:00', '2023-05-28 10:45:00', NULL),
(11, 2, 'Sony', 'Multinational conglomerate corporation', 'sony_logo.png', '2023-05-29 03:30:00', '2023-05-29 03:30:00', NULL),
(12, 2, 'LG', 'Global leader in electronics, mobile communications', 'lg_logo.png', '2023-05-30 07:45:00', '2023-05-30 07:45:00', NULL),
(13, 2, 'Samsung', 'Leading technology company in electronics', 'samsung_logo.png', '2023-05-31 04:00:00', '2023-05-31 04:00:00', NULL),
(14, 2, 'Panasonic', 'Making life better', 'panasonic_logo.png', '2023-06-01 10:15:00', '2023-06-01 10:15:00', NULL),
(15, 2, 'Philips', 'Innovation and You', 'philips_logo.png', '2023-06-02 03:30:00', '2023-06-02 03:30:00', NULL),
(16, 2, 'Bose', 'Better sound through research', 'bose_logo.png', '2023-06-03 07:45:00', '2023-06-03 07:45:00', NULL),
(17, 2, 'Dell', 'Empowering countries, communities, customers', 'dell_logo.png', '2023-06-04 04:00:00', '2023-06-04 04:00:00', NULL),
(18, 2, 'HP', 'Keep Reinventing', 'hp_logo.png', '2023-06-05 10:15:00', '2023-06-05 10:15:00', NULL),
(19, 2, 'Lenovo', 'For Those Who Do', 'lenovo_logo.png', '2023-06-06 03:30:00', '2023-06-06 03:30:00', NULL),
(20, 2, 'Acer', 'Empowering People', 'acer_logo.png', '2023-06-07 07:45:00', '2023-06-07 07:45:00', NULL),
(21, 3, 'Apple', 'Innovative products and design', 'apple_logo.png', '2023-06-08 02:30:00', '2023-06-08 02:30:00', NULL),
(22, 3, 'Dell', 'Empowering countries, communities, customers', 'dell_logo.png', '2023-06-09 08:45:00', '2023-06-09 08:45:00', NULL),
(23, 3, 'HP', 'Keep Reinventing', 'hp_logo.png', '2023-06-10 05:00:00', '2023-06-10 05:00:00', NULL),
(24, 3, 'Lenovo', 'For Those Who Do', 'lenovo_logo.png', '2023-06-11 11:30:00', '2023-06-11 11:30:00', NULL),
(25, 3, 'Acer', 'Empowering People', 'acer_logo.png', '2023-06-12 03:10:00', '2023-06-12 03:10:00', NULL),
(26, 3, 'Asus', 'In Search of Incredible', 'asus_logo.png', '2023-06-13 07:00:00', '2023-06-13 07:00:00', NULL),
(27, 3, 'Microsoft', 'Empower every person and every organization on the planet', 'microsoft_logo.png', '2023-06-14 02:00:00', '2023-06-14 02:00:00', NULL),
(28, 3, 'Acer', 'Empowering People', 'acer_logo.png', '2023-06-15 08:15:00', '2023-06-15 08:15:00', NULL),
(29, 3, 'MSI', 'True Gaming', 'msi_logo.png', '2023-06-16 05:30:00', '2023-06-16 05:30:00', NULL),
(30, 3, 'LG', 'Global leader in electronics, mobile communications', 'lg_logo.png', '2023-06-17 10:45:00', '2023-06-17 10:45:00', NULL),
(31, 4, 'Rolex', 'Swiss luxury watch manufacturer', 'rolex_logo.png', '2023-06-18 03:30:00', '2023-06-18 03:30:00', NULL),
(32, 4, 'Casio', 'Japanese multinational consumer electronics and commercial electronics manufacturing company', 'casio_logo.png', '2023-06-19 07:45:00', '2023-06-19 07:45:00', NULL),
(33, 4, 'Omega', 'Swiss luxury watchmaker', 'omega_logo.png', '2023-06-20 02:00:00', '2023-06-20 02:00:00', NULL),
(34, 4, 'Seiko', 'Japanese manufacturer of watches, clocks, electronic devices, semiconductors, jewel', 'seiko_logo.png', '2023-06-21 08:15:00', '2023-06-21 08:15:00', NULL),
(35, 4, 'Citizen', 'Japanese watchmaker', 'citizen_logo.png', '2023-06-22 05:30:00', '2023-06-22 05:30:00', NULL),
(36, 4, 'Tag Heuer', 'Swiss luxury watchmaker', 'tagheuer_logo.png', '2023-06-23 11:45:00', '2023-06-23 11:45:00', NULL),
(37, 4, 'Bulova', 'American watch brand', 'bulova_logo.png', '2023-06-24 03:15:00', '2023-06-24 03:15:00', NULL),
(38, 4, 'Fossil', 'American fashion designer and manufacturer', 'fossil_logo.png', '2023-06-25 07:30:00', '2023-06-25 07:30:00', NULL),
(39, 4, 'Swatch', 'Swiss watchmaker', 'swatch_logo.png', '2023-06-26 02:45:00', '2023-06-26 02:45:00', NULL),
(40, 4, 'Timex', 'American manufacturing company', 'timex_logo.png', '2023-06-27 08:00:00', '2023-06-27 08:00:00', NULL),
(41, 5, 'Penguin Random House', 'American book publishing company', 'penguin_random_house_logo.png', '2023-06-28 05:15:00', '2023-06-28 05:15:00', NULL),
(42, 5, 'HarperCollins', 'American book publisher', 'harpercollins_logo.png', '2023-06-29 10:30:00', '2023-06-29 10:30:00', NULL),
(43, 5, 'Simon & Schuster', 'American publishing company', 'simon_schuster_logo.png', '2023-06-30 03:45:00', '2023-06-30 03:45:00', NULL),
(44, 5, 'Hachette Livre', 'French publishing group', 'hachette_livre_logo.png', '2023-07-01 08:00:00', '2023-07-01 08:00:00', NULL),
(45, 5, 'Macmillan Publishers', 'American publishing company', 'macmillan_publishers_logo.png', '2023-07-02 01:30:00', '2023-07-02 01:30:00', NULL),
(46, 5, 'Scholastic Corporation', 'American multinational publishing, education and media company', 'scholastic_corporation_logo.png', '2023-07-03 06:45:00', '2023-07-03 06:45:00', NULL),
(47, 5, 'Wiley', 'Global publishing company', 'wiley_logo.png', '2023-07-04 04:00:00', '2023-07-04 04:00:00', NULL),
(48, 5, 'Oxford University Press', 'Largest university press in the world', 'oxford_university_press_logo.png', '2023-07-05 09:15:00', '2023-07-05 09:15:00', NULL),
(49, 5, 'Pearson plc', 'British multinational publishing and education company', 'pearson_logo.png', '2023-07-06 02:30:00', '2023-07-06 02:30:00', NULL),
(50, 5, 'Bloomsbury Publishing', 'Independent worldwide publishing house', 'bloomsbury_publishing_logo.png', '2023-07-07 07:45:00', '2023-07-07 07:45:00', NULL),
(51, 6, 'LEGO', 'Danish toy production company', 'lego_logo.png', '2023-07-08 05:00:00', '2023-07-08 05:00:00', NULL),
(52, 6, 'Mattel', 'American multinational toy manufacturer', 'mattel_logo.png', '2023-07-09 11:15:00', '2023-07-09 11:15:00', NULL),
(53, 6, 'Hasbro', 'American multinational conglomerate with toy, board game, and media assets', 'hasbro_logo.png', '2023-07-10 03:30:00', '2023-07-10 03:30:00', NULL),
(54, 6, 'Fisher-Price', 'American company that produces educational toys for children', 'fisher_price_logo.png', '2023-07-11 08:45:00', '2023-07-11 08:45:00', NULL),
(55, 6, 'Melissa & Doug', 'American manufacturer of children\'s toys', 'melissa_doug_logo.png', '2023-07-12 02:00:00', '2023-07-12 02:00:00', NULL),
(56, 6, 'Nerf', 'Toy brand created by Parker Brothers', 'nerf_logo.png', '2023-07-13 07:15:00', '2023-07-13 07:15:00', NULL),
(57, 6, 'Barbie', 'Fashion doll manufactured by the American toy company Mattel', 'barbie_logo.png', '2023-07-14 04:30:00', '2023-07-14 04:30:00', NULL),
(58, 6, 'Hot Wheels', 'Die-cast toy cars introduced by American toy maker Mattel', 'hot_wheels_logo.png', '2023-07-15 09:45:00', '2023-07-15 09:45:00', NULL),
(59, 6, 'Play-Doh', 'Non-toxic modeling compound for children', 'play_doh_logo.png', '2023-07-16 03:00:00', '2023-07-16 03:00:00', NULL),
(60, 6, 'L.O.L. Surprise!', 'Line of fashion dolls and toys', 'lol_surprise_logo.png', '2023-07-17 08:15:00', '2023-07-17 08:15:00', NULL),
(61, 7, 'IKEA', 'Affordable furniture with modern design', 'ikea_logo.png', '2023-07-18 05:00:00', '2023-07-18 05:00:00', NULL),
(62, 7, 'Ashley Furniture', 'Quality furniture for every lifestyle', 'ashley_logo.png', '2023-07-19 11:15:00', '2023-07-19 11:15:00', NULL),
(63, 7, 'Wayfair', 'Home goods and furniture retailer', 'wayfair_logo.png', '2023-07-20 03:30:00', '2023-07-20 03:30:00', NULL),
(64, 7, 'Rooms To Go', 'American furniture store chain', 'rooms_to_go_logo.png', '2023-07-21 08:45:00', '2023-07-21 08:45:00', NULL),
(65, 7, 'Bob\'s Discount Furniture', 'American furniture store chain', 'bobs_discount_furniture_logo.png', '2023-07-22 02:00:00', '2023-07-22 02:00:00', NULL),
(66, 7, 'Ethan Allen', 'American furniture chain', 'ethan_allen_logo.png', '2023-07-23 07:15:00', '2023-07-23 07:15:00', NULL),
(67, 7, 'La-Z-Boy', 'American furniture manufacturer', 'la_z_boy_logo.png', '2023-07-24 04:30:00', '2023-07-24 04:30:00', NULL),
(68, 7, 'Raymour & Flanigan', 'American furniture retail chain', 'raymour_flanigan_logo.png', '2023-07-25 09:45:00', '2023-07-25 09:45:00', NULL),
(69, 7, 'Havertys', 'Furniture retailer', 'havertys_logo.png', '2023-07-26 03:00:00', '2023-07-26 03:00:00', NULL),
(70, 7, 'Badcock Home Furniture &more', 'American furniture retailer', 'badcock_home_furniture_logo.png', '2023-07-27 08:15:00', '2023-07-27 08:15:00', NULL),
(81, 8, 'Toyota', 'Reliable and efficient vehicles', 'toyota_logo.png', '2023-06-20 02:30:00', '2023-06-20 02:30:00', NULL),
(82, 8, 'Honda', 'Innovative and durable vehicles', 'honda_logo.png', '2023-06-21 08:45:00', '2023-06-21 08:45:00', NULL),
(83, 8, 'Ford', 'Iconic American automobile manufacturer', 'ford_logo.png', '2023-06-22 05:00:00', '2023-06-22 05:00:00', NULL),
(84, 8, 'Chevrolet', 'Bringing technology and performance together', 'chevrolet_logo.png', '2023-06-23 11:30:00', '2023-06-23 11:30:00', NULL),
(85, 8, 'Tesla', 'Innovative electric vehicles and clean energy', 'tesla_logo.png', '2023-06-24 03:10:00', '2023-06-24 03:10:00', NULL),
(86, 8, 'BMW', 'The Ultimate Driving Machine', 'bmw_logo.png', '2023-06-25 07:00:00', '2023-06-25 07:00:00', NULL),
(87, 8, 'Mercedes-Benz', 'The best or nothing', 'mercedes_logo.png', '2023-06-26 02:00:00', '2023-06-26 02:00:00', NULL),
(88, 8, 'Audi', 'Vorsprung durch Technik', 'audi_logo.png', '2023-06-27 08:15:00', '2023-06-27 08:15:00', NULL),
(89, 8, 'Nissan', 'Innovation that excites', 'nissan_logo.png', '2023-06-28 05:30:00', '2023-06-28 05:30:00', NULL),
(90, 8, 'Kia', 'The Power to Surprise', 'kia_logo.png', '2023-06-29 10:45:00', '2023-06-29 10:45:00', NULL),
(91, 9, 'Tiffany & Co.', 'Luxury jewelry and specialty retailer', 'tiffany_logo.png', '2023-06-30 03:30:00', '2023-06-30 03:30:00', NULL),
(92, 9, 'Cartier', 'French luxury goods conglomerate', 'cartier_logo.png', '2023-07-01 07:45:00', '2023-07-01 07:45:00', NULL),
(93, 9, 'Harry Winston', 'Jeweler to the Stars', 'harrywinston_logo.png', '2023-07-02 04:00:00', '2023-07-02 04:00:00', NULL),
(94, 9, 'Bvlgari', 'Italian luxury brand known for jewelry', 'bvlgari_logo.png', '2023-07-03 10:15:00', '2023-07-03 10:15:00', NULL),
(95, 9, 'Chopard', 'Swiss watchmaker and jewelry maison', 'chopard_logo.png', '2023-07-04 03:30:00', '2023-07-04 03:30:00', NULL),
(96, 9, 'David Yurman', 'American jewelry designer', 'davidyurman_logo.png', '2023-07-05 07:45:00', '2023-07-05 07:45:00', NULL),
(97, 9, 'Van Cleef & Arpels', 'French luxury jewelry, watch, and perfume company', 'vancleefarpels_logo.png', '2023-07-06 04:00:00', '2023-07-06 04:00:00', NULL),
(98, 9, 'Piaget', 'Swiss luxury watchmaker and jeweler', 'piaget_logo.png', '2023-07-07 10:45:00', '2023-07-07 10:45:00', NULL),
(99, 9, 'Boucheron', 'French luxury jewelry and watch brand', 'boucheron_logo.png', '2023-07-08 03:30:00', '2023-07-08 03:30:00', NULL),
(100, 9, 'Mikimoto', 'Japanese luxury pearl company', 'mikimoto_logo.png', '2023-07-09 07:45:00', '2023-07-09 07:45:00', NULL),
(101, 10, 'IKEA', 'Affordable furniture with modern design', 'ikea_logo.png', '2023-07-10 05:00:00', '2023-07-10 05:00:00', NULL),
(102, 10, 'Ashley Furniture', 'Quality furniture for every lifestyle', 'ashley_logo.png', '2023-07-11 11:30:00', '2023-07-11 11:30:00', NULL),
(103, 10, 'Wayfair', 'Home goods and furniture retailer', 'wayfair_logo.png', '2023-07-12 03:10:00', '2023-07-12 03:10:00', NULL),
(104, 10, 'Pottery Barn', 'Furnishings for the home, indoor and outdoor', 'potterybarn_logo.png', '2023-07-13 07:00:00', '2023-07-13 07:00:00', NULL),
(105, 10, 'Crate and Barrel', 'Modern furniture, home decor, and housewares', 'cratebarrel_logo.png', '2023-07-14 02:00:00', '2023-07-14 02:00:00', NULL),
(106, 10, 'West Elm', 'Modern furniture and home decor', 'westelm_logo.png', '2023-07-15 08:15:00', '2023-07-15 08:15:00', NULL),
(107, 10, 'Williams-Sonoma', 'High-quality cookware and kitchenware', 'williamssonoma_logo.png', '2023-07-16 05:30:00', '2023-07-16 05:30:00', NULL),
(108, 10, 'Bed Bath & Beyond', 'Domestic merchandise retail chain', 'bedbathbeyond_logo.png', '2023-07-17 10:45:00', '2023-07-17 10:45:00', NULL),
(109, 10, 'Target', 'Discount store retailer', 'target_logo.png', '2023-07-18 03:30:00', '2023-07-18 03:30:00', NULL),
(110, 10, 'HomeGoods', 'Off-price home fashion retailer', 'homegoods_logo.png', '2023-07-19 07:45:00', '2023-07-19 07:45:00', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_category`
--

CREATE TABLE `product_category` (
  `product_category_id` bigint(20) UNSIGNED NOT NULL,
  `field_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_category`
--

INSERT INTO `product_category` (`product_category_id`, `field_id`, `name`, `description`, `icon`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Smartphones', 'All-in-one communication devices', 'smartphones_icon.svg', '2023-04-01 02:30:00', '2023-04-01 02:30:00', NULL),
(2, 1, 'Tablets', 'Portable touch-screen devices', 'tablets_icon.svg', '2023-04-02 08:45:00', '2023-04-02 08:45:00', NULL),
(3, 1, 'Power Banks', 'Portable chargers for mobile devices', 'power_banks_icon.svg', '2023-04-03 05:00:00', '2023-04-03 05:00:00', NULL),
(4, 1, 'SIM Cards', 'Subscriber Identity Module for mobile networks', 'sim_cards_icon.svg', '2023-04-04 11:30:00', '2023-04-04 11:30:00', NULL),
(5, 2, 'Smart TVs', 'Televisions with smart features', 'smart_tvs_icon.svg', '2023-04-05 02:30:00', '2023-04-05 02:30:00', NULL),
(6, 2, 'Speakers', 'Audio devices for sound reproduction', 'speakers_icon.svg', '2023-04-06 08:45:00', '2023-04-06 08:45:00', NULL),
(7, 2, 'Headphones', 'Audio devices for private listening', 'headphones_icon.svg', '2023-04-07 05:00:00', '2023-04-07 05:00:00', NULL),
(8, 2, 'Gaming Discs', 'Optical discs for gaming consoles', 'gaming_discs_icon.svg', '2023-04-08 11:30:00', '2023-04-08 11:30:00', NULL),
(9, 3, 'Desktop Computers', 'Stationary computers for various applications', 'desktop_computers_icon.svg', '2023-04-09 02:30:00', '2023-04-09 02:30:00', NULL),
(10, 3, 'Laptops', 'Portable computers for work and entertainment', 'laptops_icon.svg', '2023-04-10 08:45:00', '2023-04-10 08:45:00', NULL),
(11, 3, 'Monitors', 'Displays for desktop computers and laptops', 'monitors_icon.svg', '2023-04-11 05:00:00', '2023-04-11 05:00:00', NULL),
(12, 3, 'Gaming PCs', 'High-performance computers for gaming', 'gaming_pcs_icon.svg', '2023-04-12 11:30:00', '2023-04-12 11:30:00', NULL),
(13, 3, 'Printers', 'Devices for producing printed documents', 'printers_icon.svg', '2023-04-13 03:10:00', '2023-04-13 03:10:00', NULL),
(14, 3, 'Projectors', 'Devices for projecting images onto surfaces', 'projectors_icon.svg', '2023-04-14 07:00:00', '2023-04-14 07:00:00', NULL),
(15, 4, 'Men Watches', 'Wristwatches for men', 'mens_watches_icon.svg', '2023-04-15 02:30:00', '2023-04-15 02:30:00', NULL),
(16, 4, 'Women Watches', 'Wristwatches for women', 'womens_watches_icon.svg', '2023-04-16 08:45:00', '2023-04-16 08:45:00', NULL),
(17, 4, 'Children Watches', 'Wristwatches for kids', 'childrens_watches_icon.svg', '2023-04-17 05:00:00', '2023-04-17 05:00:00', NULL),
(18, 5, 'Fiction Books', 'Imaginary and creative storytelling', 'fiction_books_icon.svg', '2023-04-18 02:30:00', '2023-04-18 02:30:00', NULL),
(19, 5, 'Non-Fiction Books', 'Based on real events and facts', 'nonfiction_books_icon.svg', '2023-04-19 08:45:00', '2023-04-19 08:45:00', NULL),
(20, 5, 'Mystery/Thriller Books', 'Books that keep readers on the edge of their seats', 'mystery_thriller_books_icon.svg', '2023-04-20 05:00:00', '2023-04-20 05:00:00', NULL),
(21, 5, 'Science Fiction Books', 'Books exploring futuristic concepts and technology', 'science_fiction_books_icon.svg', '2023-04-21 11:30:00', '2023-04-21 11:30:00', NULL),
(22, 5, 'Self-Help Books', 'Books focused on personal development and motivation', 'self_help_books_icon.svg', '2023-04-22 03:10:00', '2023-04-22 03:10:00', NULL),
(23, 6, 'Action Figures', 'Collectible figures depicting characters', 'action_figures_icon.svg', '2023-04-23 02:30:00', '2023-04-23 02:30:00', NULL),
(24, 6, 'Educational Toys', 'Toys designed for learning and development', 'educational_toys_icon.svg', '2023-04-24 08:45:00', '2023-04-24 08:45:00', NULL),
(25, 6, 'Board Games', 'Games played on a flat surface with pieces', 'board_games_icon.svg', '2023-04-25 05:00:00', '2023-04-25 05:00:00', NULL),
(26, 6, 'Plush Toys', 'Soft stuffed animals and characters', 'plush_toys_icon.svg', '2023-04-26 11:30:00', '2023-04-26 11:30:00', NULL),
(27, 7, 'Living Room', 'Furniture for the main gathering space', 'living_room_furniture_icon.svg', '2023-04-27 02:30:00', '2023-04-27 02:30:00', NULL),
(28, 7, 'Bedroom', 'Furniture for the bedroom space', 'bedroom_furniture_icon.svg', '2023-04-28 08:45:00', '2023-04-28 08:45:00', NULL),
(29, 7, 'Dining Room', 'Furniture for the dining area', 'dining_room_furniture_icon.svg', '2023-04-29 05:00:00', '2023-04-29 05:00:00', NULL),
(30, 7, 'Office', 'Furniture for workspace and offices', 'office_furniture_icon.svg', '2023-04-30 11:30:00', '2023-04-30 11:30:00', NULL),
(31, 7, 'Outdoor', 'Furniture designed for outdoor use', 'outdoor_furniture_icon.svg', '2023-05-01 03:10:00', '2023-05-01 03:10:00', NULL),
(32, 7, 'Bathtub', 'Furniture designed for children\'s rooms', 'kids_furniture_icon.svg', '2023-05-02 07:00:00', '2023-05-02 07:00:00', NULL),
(33, 8, 'Bicycles', 'Human-powered two-wheeled vehicles', 'bicycles_icon.svg', '2023-05-03 02:30:00', '2023-05-03 02:30:00', NULL),
(34, 8, 'Motorcycles', 'Motor-powered two-wheeled vehicles', 'motorcycles_icon.svg', '2023-05-04 08:45:00', '2023-05-04 08:45:00', NULL),
(35, 8, 'Electric Bicycles', 'Bicycles with electric motor assistance', 'electric_bicycles_icon.svg', '2023-05-05 05:00:00', '2023-05-05 05:00:00', NULL),
(36, 8, 'Electric Scooters', 'Motor-powered scooters with electric propulsion', 'electric_scooters_icon.svg', '2023-05-06 11:30:00', '2023-05-06 11:30:00', NULL),
(37, 8, 'Kids Bikes', 'Bicycles designed for children', 'kids_bikes_icon.svg', '2023-05-07 03:10:00', '2023-05-07 03:10:00', NULL),
(38, 9, 'Necklaces', 'Ornamental chains worn around the neck', 'necklaces_icon.svg', '2023-05-08 02:30:00', '2023-05-08 02:30:00', NULL),
(39, 9, 'Earrings', 'Ornamental pieces worn on the ear', 'earrings_icon.svg', '2023-05-09 08:45:00', '2023-05-09 08:45:00', NULL),
(40, 9, 'Bracelets', 'Ornamental bands worn around the wrist', 'bracelets_icon.svg', '2023-05-10 05:00:00', '2023-05-10 05:00:00', NULL),
(41, 9, 'Rings', 'Circular bands worn on the finger', 'rings_icon.svg', '2023-05-11 11:30:00', '2023-05-11 11:30:00', NULL),
(42, 9, 'Brooches', 'Decorative jewelry fastened to clothing', 'brooches_icon.svg', '2023-05-12 03:10:00', '2023-05-12 03:10:00', NULL),
(43, 10, 'Kitchenware', 'Utensils and tools for use in the kitchen', 'kitchenware_icon.svg', '2023-05-14 02:30:00', '2023-05-14 02:30:00', NULL),
(44, 10, 'Home Decor', 'Items used to make a home more attractive', 'home_decor_icon.svg', '2023-05-15 08:45:00', '2023-05-15 08:45:00', NULL),
(45, 10, 'Bedding', 'Coverings for a bed, such as sheets and blankets', 'bedding_icon.svg', '2023-05-16 05:00:00', '2023-05-16 05:00:00', NULL),
(46, 10, 'Cleaning Supplies', 'Tools and materials used to clean and maintain a space', 'cleaning_supplies_icon.svg', '2023-05-17 11:30:00', '2023-05-17 11:30:00', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_color`
--

CREATE TABLE `product_color` (
  `color_id` bigint(20) UNSIGNED NOT NULL,
  `color_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_color`
--

INSERT INTO `product_color` (`color_id`, `color_name`) VALUES
(1, 'Red'),
(2, 'Blue'),
(3, 'Green');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_image`
--

CREATE TABLE `product_image` (
  `image_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image_url` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_review`
--

CREATE TABLE `product_review` (
  `product_review_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` varchar(150) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_size`
--

CREATE TABLE `product_size` (
  `size_id` bigint(20) UNSIGNED NOT NULL,
  `size_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_size`
--

INSERT INTO `product_size` (`size_id`, `size_name`) VALUES
(1, 'Small'),
(2, 'Medium'),
(3, 'Large');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shipping_method`
--

CREATE TABLE `shipping_method` (
  `shipping_method_id` bigint(20) UNSIGNED NOT NULL,
  `shipping_method_name` varchar(20) DEFAULT NULL,
  `shipping_method_price` decimal(11,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `shipping_method`
--

INSERT INTO `shipping_method` (`shipping_method_id`, `shipping_method_name`, `shipping_method_price`) VALUES
(1, 'Standard', 5.00),
(2, 'Express', 10.00);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `shopping_cart_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transaction`
--

CREATE TABLE `transaction` (
  `transaction_id` bigint(20) UNSIGNED NOT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `payment_id` bigint(20) UNSIGNED NOT NULL,
  `transaction_status` varchar(20) DEFAULT NULL,
  `total_amount` decimal(11,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `transaction`
--

INSERT INTO `transaction` (`transaction_id`, `buyer_id`, `seller_id`, `order_id`, `payment_id`, `transaction_status`, `total_amount`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1, 1, 'Completed', 1599.98, '2023-12-30 15:16:43', '2023-12-30 15:16:43'),
(2, 1, 2, 2, 2, 'Completed', 89.94, '2023-12-30 15:16:43', '2023-12-30 15:16:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `type_account_id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(130) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `avt_image` varchar(50) DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `telephone` varchar(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`user_id`, `type_account_id`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `avt_image`, `first_name`, `last_name`, `telephone`, `created_at`, `updated_at`) VALUES
(1, 1, 'john_doe', 'john@example.com', '2023-12-30 08:16:41', '$2y$12$wX0cwlXzhKrX4s7xaQsXEOlLNc9pQd.zm8OMAhUkTK9i5XRzYl3mC', '', 'avatar.jpg', 'John', 'Doe', '1234567890', '2023-12-30 15:16:41', '2023-12-30 15:16:41'),
(2, 1, 'jane_smith', 'jane_smith@gmail.com', '2023-12-30 08:16:41', '$2y$12$CbsAzs.Bg1nAmBNjzfHJQOyhSL42euvVijYe5zQHf2lu1kDWmM3ky', '', 'avatar.jpg', 'Jane', 'Smith', '9876543210', '2023-12-30 15:16:41', '2023-12-30 15:16:41'),
(3, 2, 'aaa', 'aaa@gmail.com', '2023-12-30 08:16:41', '$2y$12$Y/P.X3CsVkRpKZjhY3KWdOk4iX.gxlmvN7rFhe5ADqAVzY2nm1dg6', '', 'avatar.jpg', 'a', 'aa', '9876543210', '2023-12-30 15:16:42', '2023-12-30 15:16:42'),
(4, 2, 'www', 'www@gmail.com', '2023-12-30 08:16:42', '$2y$12$JJVowkPYq9PSj7yXg/B1I.L9osX6Qmes/sWtFggcc7RjS/6yUEX2y', '', 'avatar.jpg', 'w', 'ww', '9876543210', '2023-12-30 15:16:42', '2023-12-30 15:16:42'),
(5, 2, 'qqq', 'qqq@gmail.com', '2023-12-30 08:16:42', '$2y$12$g26s1FEvVcP119wGjQGsU.4QpPDzIrjzwnSgApMf6BsMCzkMuNwnm', '', 'avatar.jpg', 'q', 'qq', '9876543210', '2023-12-30 15:16:42', '2023-12-30 15:16:42'),
(6, 3, 'ttt', 'ttt@gmail.com', '2023-12-30 08:16:42', '$2y$12$Td4ViI6/XhyOqaKd4RzpG.hjbELXekDq07AJvseBdq1ABgiGdHdAC', '', 'avatar.jpg', 't', 'tt', '9876543210', '2023-12-30 15:16:42', '2023-12-30 15:16:42'),
(7, 3, 'rrrr', 'rrr@gmail.com', '2023-12-30 08:16:42', '$2y$12$AUMqyNTJpyz8cLPJAoajaeiKBOvK13Sq/L5K9rfnwpaJS.wUNpYhi', '', 'avatar.jpg', 'r', 'rr', '9876543210', '2023-12-30 15:16:43', '2023-12-30 15:16:43'),
(8, 3, 'ggg', 'ggg@gmail.com', '2023-12-30 08:16:43', '$2y$12$R.yedOv18GnuY3zcws8E7uSHWzycHjcjeJEqHV0wBAnvsgoS6UGPS', '', 'avatar.jpg', 'ggg', 'ggg', '9876543210', '2023-12-30 15:16:43', '2023-12-30 15:16:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_address`
--

CREATE TABLE `user_address` (
  `user_address_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `number` varchar(50) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `commune` varchar(50) DEFAULT NULL,
  `district` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `postal_code` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_address`
--

INSERT INTO `user_address` (`user_address_id`, `user_id`, `number`, `street`, `commune`, `district`, `province`, `country`, `postal_code`, `created_at`, `updated_at`) VALUES
(1, 1, '123', 'Main Street', 'Downtown', 'Cityville', 'State', 'Country', '12345', '2023-12-30 15:16:43', '2023-12-30 15:16:43'),
(2, 2, '456', 'Oak Avenue', 'Suburb', 'Townsville', 'State', 'Country', '67890', '2023-12-30 15:16:43', '2023-12-30 15:16:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_payment`
--

CREATE TABLE `user_payment` (
  `payment_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `payment_type_id` bigint(20) UNSIGNED NOT NULL,
  `card_name_hash` varchar(130) DEFAULT NULL,
  `card_number_hash` varchar(130) DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  `cvv` varchar(130) DEFAULT NULL,
  `paypal_email` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_payment`
--

INSERT INTO `user_payment` (`payment_id`, `user_id`, `payment_type_id`, `card_name_hash`, `card_number_hash`, `expiration_date`, `cvv`, `paypal_email`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'hashed_card_name', 'hashed_card_number', '2025-12-31', 'hashed_cvv', NULL, '2023-12-30 15:16:43', '2023-12-30 15:16:43'),
(2, 2, 2, 'hashed_card_name', 'hashed_card_name', '2025-12-31', 'hashed_cvv', 'jane.smith@example.com', '2023-12-30 15:16:43', '2023-12-30 15:16:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_review`
--

CREATE TABLE `user_review` (
  `user_review_id` bigint(20) UNSIGNED NOT NULL,
  `reviewer_id` bigint(20) UNSIGNED NOT NULL,
  `reviewee_id` bigint(20) UNSIGNED NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` varchar(150) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_review`
--

INSERT INTO `user_review` (`user_review_id`, `reviewer_id`, `reviewee_id`, `rating`, `comment`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 4, 'Great buyer!', '2023-12-30 15:16:43', '2023-12-30 15:16:43'),
(2, 2, 1, 5, 'Excellent seller!', '2023-12-30 15:16:43', '2023-12-30 15:16:43');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account_type`
--
ALTER TABLE `account_type`
  ADD PRIMARY KEY (`type_account_id`);

--
-- Chỉ mục cho bảng `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`discount_id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `field`
--
ALTER TABLE `field`
  ADD PRIMARY KEY (`field_id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `order_user_id_foreign` (`user_id`),
  ADD KEY `order_order_status_id_foreign` (`order_status_id`),
  ADD KEY `order_shipping_method_id_foreign` (`shipping_method_id`);

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_items_id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`order_status_id`);

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `payment_type`
--
ALTER TABLE `payment_type`
  ADD PRIMARY KEY (`payment_type_id`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_discount_id_foreign` (`discount_id`),
  ADD KEY `product_color_id_foreign` (`color_id`),
  ADD KEY `product_size_id_foreign` (`size_id`),
  ADD KEY `product_product_brand_id_foreign` (`product_brand_id`),
  ADD KEY `product_product_category_id_foreign` (`product_category_id`);

--
-- Chỉ mục cho bảng `product_brand`
--
ALTER TABLE `product_brand`
  ADD PRIMARY KEY (`product_brand_id`),
  ADD KEY `FK_product_brand_field` (`field_id`);

--
-- Chỉ mục cho bảng `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`product_category_id`),
  ADD KEY `FK_product_category_field` (`field_id`);

--
-- Chỉ mục cho bảng `product_color`
--
ALTER TABLE `product_color`
  ADD PRIMARY KEY (`color_id`);

--
-- Chỉ mục cho bảng `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `product_image_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `product_review`
--
ALTER TABLE `product_review`
  ADD PRIMARY KEY (`product_review_id`),
  ADD KEY `product_review_user_id_foreign` (`user_id`),
  ADD KEY `product_review_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`size_id`);

--
-- Chỉ mục cho bảng `shipping_method`
--
ALTER TABLE `shipping_method`
  ADD PRIMARY KEY (`shipping_method_id`);

--
-- Chỉ mục cho bảng `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`shopping_cart_id`),
  ADD KEY `shopping_cart_user_id_foreign` (`user_id`),
  ADD KEY `shopping_cart_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `transaction_buyer_id_foreign` (`buyer_id`),
  ADD KEY `transaction_seller_id_foreign` (`seller_id`),
  ADD KEY `transaction_order_id_foreign` (`order_id`),
  ADD KEY `transaction_payment_id_foreign` (`payment_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_type_account_id_foreign` (`type_account_id`);

--
-- Chỉ mục cho bảng `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`user_address_id`),
  ADD KEY `user_address_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `user_payment`
--
ALTER TABLE `user_payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `user_payment_user_id_foreign` (`user_id`),
  ADD KEY `user_payment_payment_type_id_foreign` (`payment_type_id`);

--
-- Chỉ mục cho bảng `user_review`
--
ALTER TABLE `user_review`
  ADD PRIMARY KEY (`user_review_id`),
  ADD KEY `user_review_reviewer_id_foreign` (`reviewer_id`),
  ADD KEY `user_review_reviewee_id_foreign` (`reviewee_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account_type`
--
ALTER TABLE `account_type`
  MODIFY `type_account_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `discount`
--
ALTER TABLE `discount`
  MODIFY `discount_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `field`
--
ALTER TABLE `field`
  MODIFY `field_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `order_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_items_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `order_status`
--
ALTER TABLE `order_status`
  MODIFY `order_status_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `payment_type`
--
ALTER TABLE `payment_type`
  MODIFY `payment_type_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `product_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `product_brand`
--
ALTER TABLE `product_brand`
  MODIFY `product_brand_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT cho bảng `product_category`
--
ALTER TABLE `product_category`
  MODIFY `product_category_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT cho bảng `product_color`
--
ALTER TABLE `product_color`
  MODIFY `color_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `product_image`
--
ALTER TABLE `product_image`
  MODIFY `image_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `product_review`
--
ALTER TABLE `product_review`
  MODIFY `product_review_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `product_size`
--
ALTER TABLE `product_size`
  MODIFY `size_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `shipping_method`
--
ALTER TABLE `shipping_method`
  MODIFY `shipping_method_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `shopping_cart_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transaction_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `user_address`
--
ALTER TABLE `user_address`
  MODIFY `user_address_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `user_payment`
--
ALTER TABLE `user_payment`
  MODIFY `payment_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `user_review`
--
ALTER TABLE `user_review`
  MODIFY `user_review_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_order_status_id_foreign` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`order_status_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_shipping_method_id_foreign` FOREIGN KEY (`shipping_method_id`) REFERENCES `shipping_method` (`shipping_method_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_color_id_foreign` FOREIGN KEY (`color_id`) REFERENCES `product_color` (`color_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_product_brand_id_foreign` FOREIGN KEY (`product_brand_id`) REFERENCES `product_brand` (`product_brand_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_product_category_id_foreign` FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`product_category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_size_id_foreign` FOREIGN KEY (`size_id`) REFERENCES `product_size` (`size_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_brand`
--
ALTER TABLE `product_brand`
  ADD CONSTRAINT `FK_product_brand_field` FOREIGN KEY (`field_id`) REFERENCES `field` (`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `FK_product_category_field` FOREIGN KEY (`field_id`) REFERENCES `field` (`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_review`
--
ALTER TABLE `product_review`
  ADD CONSTRAINT `product_review_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_review_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD CONSTRAINT `shopping_cart_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `shopping_cart_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_buyer_id_foreign` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_payment_id_foreign` FOREIGN KEY (`payment_id`) REFERENCES `user_payment` (`payment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_seller_id_foreign` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_type_account_id_foreign` FOREIGN KEY (`type_account_id`) REFERENCES `account_type` (`type_account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user_address`
--
ALTER TABLE `user_address`
  ADD CONSTRAINT `user_address_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user_payment`
--
ALTER TABLE `user_payment`
  ADD CONSTRAINT `user_payment_payment_type_id_foreign` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_type` (`payment_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_payment_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user_review`
--
ALTER TABLE `user_review`
  ADD CONSTRAINT `user_review_reviewee_id_foreign` FOREIGN KEY (`reviewee_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_review_reviewer_id_foreign` FOREIGN KEY (`reviewer_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
