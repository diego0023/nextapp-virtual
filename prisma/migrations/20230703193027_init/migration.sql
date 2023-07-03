-- CreateTable
CREATE TABLE `Cantante` (
    `idcantante` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idcantante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cancion` (
    `idcancion` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `cantante_idcantante` INTEGER NOT NULL,

    PRIMARY KEY (`idcancion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cancion` ADD CONSTRAINT `Cancion_cantante_idcantante_fkey` FOREIGN KEY (`cantante_idcantante`) REFERENCES `Cantante`(`idcantante`) ON DELETE RESTRICT ON UPDATE CASCADE;
