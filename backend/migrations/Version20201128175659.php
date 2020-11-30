<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201128175659 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE checklist_item (id INT AUTO_INCREMENT NOT NULL, user_checklist_id INT DEFAULT NULL, category VARCHAR(255) NOT NULL, is_checked TINYINT(1) NOT NULL, text VARCHAR(255) NOT NULL, INDEX IDX_99EB20F931A174A5 (user_checklist_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_checklist (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE checklist_item ADD CONSTRAINT FK_99EB20F931A174A5 FOREIGN KEY (user_checklist_id) REFERENCES user_checklist (id)');
        $this->addSql('ALTER TABLE user ADD user_checklist_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64931A174A5 FOREIGN KEY (user_checklist_id) REFERENCES user_checklist (id)');
        $this->addSql('CREATE INDEX IDX_8D93D64931A174A5 ON user (user_checklist_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE checklist_item DROP FOREIGN KEY FK_99EB20F931A174A5');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64931A174A5');
        $this->addSql('DROP TABLE checklist_item');
        $this->addSql('DROP TABLE user_checklist');
        $this->addSql('DROP INDEX IDX_8D93D64931A174A5 ON user');
        $this->addSql('ALTER TABLE user DROP user_checklist_id');
    }
}
