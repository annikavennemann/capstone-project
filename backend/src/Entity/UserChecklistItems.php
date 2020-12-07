<?php

namespace App\Entity;

use App\Repository\UserChecklistItemsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserChecklistItemsRepository::class)
 */
class UserChecklistItems
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="userChecklistItems")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=ChecklistItem::class, inversedBy="userChecklistItems")
     * @ORM\JoinColumn(nullable=false)
     */
    private $checklistItem;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isChecked;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getChecklistItem(): ?ChecklistItem
    {
        return $this->checklistItem;
    }

    public function setChecklistItem(?ChecklistItem $checklistItem): self
    {
        $this->checklistItem = $checklistItem;

        return $this;
    }

    public function getIsChecked(): ?bool
    {
        return $this->isChecked;
    }

    public function setIsChecked(bool $isChecked): self
    {
        $this->isChecked = $isChecked;

        return $this;
    }
}
