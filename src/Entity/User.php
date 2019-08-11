<?php

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface
{
    /**
     * @var UuidInterface
     * @ORM\Id
     * @ORM\Column(type="uuid", unique=true)
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $fullname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $profilePictureUrl;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * User constructor.
     * @throws Exception
     */
    public function __construct()
    {
        $this->id = Uuid::uuid4();
        $this->createdAt = new DateTime();
    }

    public function getId(): string
    {
        return $this->id->toString();
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getFullname(): ?string
    {
        return $this->fullname;
    }

    public function setFullname(string $fullname): self
    {
        $this->fullname = $fullname;

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    public function getCreatedAt(): DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @return string[] The user roles
     */
    public function getRoles()
    {
        return ['ROLE_USER'];
    }

    /**
     * @return string The password
     */
    public function getPassword()
    {
        return null;
    }

    /**
     * @return string|null The salt
     */
    public function getSalt()
    {
        return null;
    }

    /**
     * @return string The username
     */
    public function getUsername()
    {
        return $this->email;
    }

    public function eraseCredentials()
    {
        return null;
    }

    /**
     * @param mixed $profilePictureUrl
     * @return User
     */
    public function setProfilePictureUrl($profilePictureUrl)
    {
        $this->profilePictureUrl = $profilePictureUrl;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getProfilePictureUrl()
    {
        return $this->profilePictureUrl;
    }

    /**
     * @return array
     */
    public function transfer()
    {
        return [
            'name' => $this->getFullname(),
            'email' => $this->getEmail(),
            'profilePictureUrl' => $this->getProfilePictureUrl(),
        ];
    }
}
