
# General flow of the user

![Flow](https://cdn.discordapp.com/attachments/1390691334121193564/1391376831474569277/image.png?ex=686cfda7&is=686bac27&hm=83087372009fcaaff9bab4e3a041bf2164db1d20e6148aab0f8fe623c88ffb33&)

This is extremly simple flow.


# Data Modesl

### User 
```
User {
  id: string (UUID) // PK
  name: string
  email: string (unique)
  password: string (hashed)
  role: 'PARENT' | 'CHILD'
  parentId: string | null // FK to User, if role = CHILD
  points: number
  createdAt: Date
  updatedAt: Date

  // Relations
  parent: User | null
  children: User[] // inverse of parentId
  chores: Chore[] // assigned chores (if role = CHILD)
  rewardsRequested: RewardRedemption[]
}
```
### Chore
```
Chore {
  id: string (UUID) // PK
  title: string
  description: string
  assignedToId: string // FK → User (child)
  assignedById: string // FK → User (parent)
  dueDate: Date
  points: number
  status: 'PENDING' | 'SUBMITTED' | 'APPROVED' | 'REJECTED'
  submittedAt: Date | null
  approvedAt: Date | null
  createdAt: Date
  updatedAt: Date

  // Relations
  assignedTo: User
  assignedBy: User
}
```  
### Reward
```
Reward {
  id: string (UUID) // PK
  name: string
  description: string
  cost: number // in points
  createdById: string // FK → User (parent)
  createdAt: Date
  updatedAt: Date

  // Relations
  createdBy: User
  redemptions: RewardRedemption[]
}
```
### RewardRedemption
```
RewardRedemption {
  id: string (UUID) // PK
  rewardId: string // FK → Reward
  requestedById: string // FK → User (child)
  approvedById: string | null // FK → User (parent)
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  requestedAt: Date
  respondedAt: Date | null

  // Relations
  reward: Reward
  requestedBy: User
  approvedBy: User | null
}
```
### Badge (optional)
```
Badge {
  id: string (UUID) // PK
  name: string
  icon: string
  description: string
  condition: string // logic to determine when earned
}
```
### UserBadge (optional)
```
UserBadge {
  id: string (UUID)
  userId: string // FK → User
  badgeId: string // FK → Badge
  earnedAt: Date

  // Relations
  user: User
  badge: Badge
}
```  
