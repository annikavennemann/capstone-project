<?php

namespace App\Entity;

use App\Repository\ChecklistItemRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ChecklistItemRepository::class)
 */
class ChecklistItem
{

    const TYPE_DAY = "day";
    const TYPE_WEEK = "week";
    const TYPE_MONTH = "month";
    const TYPE_ONE_HUNDRED_DAYS = "100days";

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity=UserChecklist::class, inversedBy="checklistItem")
     */
    private $userChecklist;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getUserChecklist(): ?UserChecklist
    {
        return $this->userChecklist;
    }

    public function setUserChecklist(?UserChecklist $userChecklist): self
    {
        $this->userChecklist = $userChecklist;

        return $this;
    }
}
