CREATE TABLE `cart_items` (
  `cart_items_id` int PRIMARY KEY AUTO_INCREMENT,
  `shopping_session_id` int,
  `product_id` int,
  `quantity` int,
  `created_at` timestamp,
  `modifed_at` timestamp
);

CREATE TABLE `discount` (
  `discout_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50),
  `description` text,
  `discount_percent` decimal(11,2),
  `active` int,
  `created_at` timestamp,
  `end` timestamp,
  `modified_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `order_details` (
  `order_details_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `order_status_id` int,
  `shipping_method_id` int,
  `total` decimal(11,2),
  `payment_id` int,
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `order_items` (
  `order_items_id` int PRIMARY KEY AUTO_INCREMENT,
  `order_id` int,
  `product_id` int,
  `quantity` int
);

CREATE TABLE `payment_details` (
  `payment_details_id` int PRIMARY KEY AUTO_INCREMENT,
  `order_details_id` int,
  `amount` int,
  `provider` varchar(50),
  `status` varchar(50),
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `product` (
  `product_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50),
  `description` text,
  `image` varchar(255),
  `user_review_id` int,
  `color_id` int,
  `size_id` int,
  `created_by_user_id` int,
  `product_category_id` int,
  `product_inventory_id` int,
  `price` decimal(11,2),
  `discount_id` int,
  `created_at` timestamp,
  `modified_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `product_category` (
  `product_category_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50),
  `description` text,
  `image` varchar(50),
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

CREATE TABLE `shopping_session` (
  `shopping_session_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `total` decimal(11,2),
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `user` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_review_id` int,
  `type_account_id` int,
  `username` varchar(50),
  `password` varchar(130),
  `first_name` varchar(20),
  `last_name` varchar(20),
  `telephone` varchar(11),
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `account_type` (
  `type_account_id` int PRIMARY KEY AUTO_INCREMENT,
  `type_account_name` varchar(255)
);

CREATE TABLE `user_address` (
  `user_address_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `phone_number` varchar(11),
  `number` varchar(50),
  `street` varchar(50),
  `communce` varchar(50),
  `district` varchar(50),
  `province` varchar(50),
  `country` varchar(50),
  `postal_code` varchar(50)
);

CREATE TABLE `user_payment` (
  `payment_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `payment_type` varchar(50),
  `provider` varchar(50),
  `account_no` int,
  `expiry` date
);

CREATE TABLE `product_color` (
  `color_id` int PRIMARY KEY AUTO_INCREMENT,
  `color_name` varchar(20),
  `color_image` varchar(50)
);

CREATE TABLE `product_size` (
  `size_id` int PRIMARY KEY AUTO_INCREMENT,
  `size_name` varchar(20),
  `size_image` varchar(50)
);

CREATE TABLE `shipping_method` (
  `shipping_method_id` int PRIMARY KEY AUTO_INCREMENT,
  `shipping_method_name` varchar(20),
  `shipping_method_price` decimal(11,2)
);

CREATE TABLE `order_status` (
  `order_status_id` int PRIMARY KEY AUTO_INCREMENT,
  `order_status_name` varchar(20)
);

CREATE TABLE `user_review` (
  `user_review_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `ordered_product_id` int,
  `value_rating` int,
  `comment` varchar(100),
  `created_at` timestamp,
  `modified_at` timestamp
);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`shopping_session_id`) REFERENCES `shopping_session` (`shopping_session_id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

ALTER TABLE `order_details` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `payment_details` ADD FOREIGN KEY (`payment_details_id`) REFERENCES `order_details` (`payment_id`);

ALTER TABLE `order_details` ADD FOREIGN KEY (`order_details_id`) REFERENCES `order_items` (`order_id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

ALTER TABLE `payment_details` ADD FOREIGN KEY (`order_details_id`) REFERENCES `order_details` (`order_details_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`product_category_id`);

ALTER TABLE `product_inventory` ADD FOREIGN KEY (`product_inventory_id`) REFERENCES `product` (`product_inventory_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discout_id`);

ALTER TABLE `user_address` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `user_payment` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `shopping_session` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `product_color` ADD FOREIGN KEY (`color_id`) REFERENCES `product` (`color_id`);

ALTER TABLE `product_size` ADD FOREIGN KEY (`size_id`) REFERENCES `product` (`size_id`);

ALTER TABLE `order_status` ADD FOREIGN KEY (`order_status_id`) REFERENCES `order_details` (`order_status_id`);

ALTER TABLE `shipping_method` ADD FOREIGN KEY (`shipping_method_id`) REFERENCES `order_details` (`shipping_method_id`);

ALTER TABLE `user_review` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `user` ADD FOREIGN KEY (`type_account_id`) REFERENCES `account_type` (`type_account_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`created_by_user_id`) REFERENCES `user` (`user_id`);

CREATE TABLE `product_user_review` (
  `product_user_review_id` int,
  `user_review_user_review_id` int,
  PRIMARY KEY (`product_user_review_id`, `user_review_user_review_id`)
);

ALTER TABLE `product_user_review` ADD FOREIGN KEY (`product_user_review_id`) REFERENCES `product` (`user_review_id`);

ALTER TABLE `product_user_review` ADD FOREIGN KEY (`user_review_user_review_id`) REFERENCES `user_review` (`user_review_id`);


CREATE TABLE `user_user_review` (
  `user_user_review_id` int,
  `user_review_user_review_id` int,
  PRIMARY KEY (`user_user_review_id`, `user_review_user_review_id`)
);

ALTER TABLE `user_user_review` ADD FOREIGN KEY (`user_user_review_id`) REFERENCES `user` (`user_review_id`);

ALTER TABLE `user_user_review` ADD FOREIGN KEY (`user_review_user_review_id`) REFERENCES `user_review` (`user_review_id`);

