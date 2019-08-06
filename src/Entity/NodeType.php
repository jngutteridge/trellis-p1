<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Table(name="node_type")
 * @ORM\Entity()
 */
class NodeType
{
    /**
     * @var UuidInterface
     * @ORM\Id
     * @ORM\Column(type="uuid", unique=true)
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="title", type="string", length=64)
     */
    private $title;

    /**
     * var NodeType[]
     * @ORM\ManyToMany(targetEntity="NodeType")
     * @ORM\JoinTable(name="node_type_permitted",
     *      joinColumns={@ORM\JoinColumn(name="node_type_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="permitted_node_type_id", referencedColumnName="id")}
     *      )
     */
    private $permitted;

    public function __construct()
    {
        $this->id = Uuid::uuid4();
        $this->permitted = new ArrayCollection();
    }

    public function getId()
    {
        return $this->id->toString();
    }

    public function setTitle(string $title)
    {
        $this->title = $title;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function addNodeType(NodeType $nodeType)
    {
        $this->permitted[] = $nodeType;
    }
}
