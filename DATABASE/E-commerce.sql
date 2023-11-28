CREATE TABLE `shopping_session` (
  `shopping_sesstion_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `total` decimal,
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `user` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `first_name` varchar(255),
  `last_name` varchar(255),
  `telephone` varchar(255),
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `user_address` (
  `user_address_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `phone_number` varchar(255),
  `number` varchar(255),
  `street` varchar(255),
  `commune` varchar(255),
  `district` varchar(255),
  `province` varchar(255),
  `country` varchar(255),
  `postal_code` varchar(255)
);

CREATE TABLE `user_payment` (
  `payment_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `payment_type` varchar(255),
  `provider` varchar(255),
  `account_no` int,
  `expiry` date
);

CREATE TABLE `product_category` (
  `product_category_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` text,
  `created_at` timestamp,
  `modified_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `product_inventory` (
  `product_inventory_id` int PRIMARY KEY AUTO_INCREMENT,
  `quantity` int,
  `created_at` timestamp,
  `modified_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `product` (
  `product_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` text,
  `SKU` varchar(255),
  `product_category_id` int,
  `product_inventory_id` int,
  `price` decimal,
  `discount_id` int,
  `created_at` timestamp,
  `modified_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `discount` (
  `discout_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` text,
  `discount_percent` decimal,
  `active` int,
  `created_at` timestamp,
  `modified_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `cart_items` (
  `cart_items_id` int PRIMARY KEY AUTO_INCREMENT,
  `shopping_session_id` int,
  `product_id` int,
  `quantity` int,
  `created_at` timestamp,
  `modifed_at` timestamp
);

CREATE TABLE `order_details` (
  `order_details_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `total` decimal,
  `payment_id` int,
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `order_items` (
  `order_items_id` int PRIMARY KEY AUTO_INCREMENT,
  `order_id` int,
  `product_id` int,
  `quantity` int,
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `payment_details` (
  `payment_details_id` int PRIMARY KEY AUTO_INCREMENT,
  `order_id` int,
  `amount` int,
  `provider` varchar(255),
  `status` varchar(255),
  `created_at` timestamp,
  `modified_at` timestamp
);

ALTER TABLE `shopping_session` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `user_address` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `user_payment` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`product_category_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`product_inventory_id`) REFERENCES `product_inventory` (`product_inventory_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discout_id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`shopping_session_id`) REFERENCES `shopping_session` (`shopping_sesstion_id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

ALTER TABLE `order_details` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `order_details` ADD FOREIGN KEY (`payment_id`) REFERENCES `payment_details` (`payment_details_id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`order_id`) REFERENCES `order_details` (`order_details_id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

ALTER TABLE `payment_details` ADD FOREIGN KEY (`order_id`) REFERENCES `order_details` (`order_details_id`);
