<?php

namespace App\Repository;

use App\Entity\UserChecklistItems;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserChecklistItems|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserChecklistItems|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserChecklistItems[]    findAll()
 * @method UserChecklistItems[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserChecklistItemsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserChecklistItems::class);
    }

    // /**
    //  * @return UserChecklistItems[] Returns an array of UserChecklistItems objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserChecklistItems
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
