# Global dictionary to store user credentials temporarily
users = {}


def register(message="Welcome"):
    print("\nChoose among the options:")
    print("1. Login")
    print("2. Register")
    print("3. Exit")

    options = input("Enter your choice: ")

    if options == "1":
        email = input("Enter your email: ")
        password = input("Enter your password: ")
        login(email, password)
    elif options == "2":
        while True:
            username = input("Your Username: ")
            email = input("Your Email: ")
            password = input("Your Password: ")

            if username != "" and email != "" and password != "":
                users[email] = {"username": username, "password": password}  # Store in dictionary
                print(f"{message}, {username}. Registration Successful!")
                break
            else:
                print("All fields are required!")
    elif options == "3":
        print("Exiting...")
        return
    else:
        print("Invalid choice. Try again.")
        register()


def login(email, password):
    if email == "" or password == "":
        print("All fields are required!")
        return

    if email in users and users[email]["password"] == password:
        print("Login Successful!")
        home("Hello", users[email]["username"])
    else:
        print("Invalid email or password. Try again.")


def home(message, username):
    print(f"{message}, {username}!")


def main():
    register()


if __name__ == "__main__":
    main()
