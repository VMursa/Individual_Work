
# Frameworks Individual Work

## Authored by Valeria Mursa

---

### Backend - Django

#### **Essentials of User and Student Handling**

The backend, crafted with Django, is the powerhouse of our application. It's where all the magic happens for keeping track of users and students.

**What's Inside:**

1. **Managing Users**
   - I use Django's own `User` model for auth and login in the system
   - It's super secure, making sure user passwords and details are safe.

2. **Looking After Students**
   - I've got a custom model called `Student`. It keeps all the important student info.
   - Adding or changing students details is also suported

3. **Paths to Talk to My App**
   - **Joining Up (`/create_user/`)**: A special spot for signing up new users.
   - **Logging In (`/login/`)**: A gateway for users to access students list and to change students info.
   - **Student Stuff (`/students/`)**: All you need for adding, seeing, changing, or removing student data.

4. **Keeping Things Safe**
   - I follow Django's top tips for keeping data safe.

#### **Key Parts**

- `User`: This is where I keep track of everyone who joins.
- `Student`: My implementation for handling all students CRUD operations.

#### **Directions in the App**

- I implemented the paths so that the app knows where to go when asked about users or students.

---

### Frontend - React

#### **A Friendly Face for User and Student Interactions**

Our frontend is what users see and interact with. Built with React, it's all about making things smooth and easy.

**Highlights:**

1. **Access for Users**
   - Forms for joining and logging in
   - It talks to the backend to make sure users are who they say they are.

2. **Handling Student Details**
   - A neat list of all students, easy to read and understand.
   - Forms for adding and tweaking student info, all user-friendly.
   - Options to dive into more details or delete student records.

3. **Moving Around**
   - React Router lets users hop from one page to another with ease.
   - Some areas, like students lists are protected – you need to be logged in to enter.

4. **Helpful Services**
   - `AuthService`: Takes care of sending and getting users info from the backend.
   - `StudentService`: Takes care of sending and getting student info from the backend.

#### **Making It Pretty**

- We’ve used a mix of direct styles and CSS classes to give the app its own style.

---