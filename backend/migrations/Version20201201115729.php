<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201201115729 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE checklist_item (id INT AUTO_INCREMENT NOT NULL, category VARCHAR(255) NOT NULL, text VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_checklist_items (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, checklist_item_id INT NOT NULL, INDEX IDX_CD2A021CA76ED395 (user_id), INDEX IDX_CD2A021C7E0892A4 (checklist_item_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_checklist_items ADD CONSTRAINT FK_CD2A021CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_checklist_items ADD CONSTRAINT FK_CD2A021C7E0892A4 FOREIGN KEY (checklist_item_id) REFERENCES checklist_item (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_checklist_items DROP FOREIGN KEY FK_CD2A021C7E0892A4');
        $this->addSql('DROP TABLE checklist_item');
        $this->addSql('DROP TABLE user_checklist_items');
    }
}
