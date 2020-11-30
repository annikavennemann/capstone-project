<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201128175213 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE checklist_item');
        $this->addSql('ALTER TABLE user_checklist DROP FOREIGN KEY FK_5C89E0CBA76ED395');
        $this->addSql('DROP INDEX UNIQ_5C89E0CBA76ED395 ON user_checklist');
        $this->addSql('ALTER TABLE user_checklist ADD is_complete TINYINT(1) NOT NULL, DROP user_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE checklist_item (id INT AUTO_INCREMENT NOT NULL, user_checklist_id INT DEFAULT NULL, category VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, is_checked TINYINT(1) NOT NULL, text VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_99EB20F931A174A5 (user_checklist_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE checklist_item ADD CONSTRAINT FK_99EB20F931A174A5 FOREIGN KEY (user_checklist_id) REFERENCES user_checklist (id)');
        $this->addSql('ALTER TABLE user_checklist ADD user_id INT NOT NULL, DROP is_complete');
        $this->addSql('ALTER TABLE user_checklist ADD CONSTRAINT FK_5C89E0CBA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5C89E0CBA76ED395 ON user_checklist (user_id)');
    }
}
