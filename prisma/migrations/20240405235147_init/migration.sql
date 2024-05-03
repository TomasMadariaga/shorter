-- CreateTable
CREATE TABLE `Link` IF NOT EXISTS(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `shortUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Link_id_key`(`id`),
    UNIQUE INDEX `Link_url_key`(`url`),
    UNIQUE INDEX `Link_shortUrl_key`(`shortUrl`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
