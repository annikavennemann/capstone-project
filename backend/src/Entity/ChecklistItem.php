<?php

namespace App\Entity;

use App\Repository\ChecklistItemRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
     * @ORM\OneToMany(targetEntity=UserChecklistItems::class, mappedBy="checklistItem")
     */
    private $userChecklistItems;

    public function __construct()
    {
        $this->userChecklistItems = new ArrayCollection();
    }

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

    /**
     * @return Collection|UserChecklistItems[]
     */
    public function getUserChecklistItems(): Collection
    {
        return $this->userChecklistItems;
    }

    public function addUserChecklistItem(UserChecklistItems $userChecklistItem): self
    {
        if (!$this->userChecklistItems->contains($userChecklistItem)) {
            $this->userChecklistItems[] = $userChecklistItem;
            $userChecklistItem->setChecklistItem($this);
        }

        return $this;
    }

    public function removeUserChecklistItem(UserChecklistItems $userChecklistItem): self
    {
        if ($this->userChecklistItems->removeElement($userChecklistItem)) {
            // set the owning side to null (unless already changed)
            if ($userChecklistItem->getChecklistItem() === $this) {
                $userChecklistItem->setChecklistItem(null);
            }
        }

        return $this;
    }
}
