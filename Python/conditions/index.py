#if 
# is not  None  , and  , or  , !=,  == 

# import time


# x = 4
# y = 4

# if x and y :
#     print(f" x ({x}) and y *({y})")
#     if x == y:
#         print("X is  equal  to   Y ")
#     else:
#         print("X is  is not equal  to Y")
# else:
#     print("Please provide us a value")


#username  ,  age  ,  ask  to learn  python  , if yes the program  will  continue .
languages = ["Java", "C#", "React"]
while True:
    username  = input("What is your username  :  ")
    age  = int(input("What is  your age :  ? "))
    if username.strip() != "":
        if age is not None:
            print("Thank you  for entering your  age.")
        else:
            print("Your Age is required.")
        print(f"Hello  , {username} ! ")
        print("Welcome  to CodeTWithJeancy ! ")
        options = input("Do you  want to learnv Python ? Choose (yes/no)")
        if options == "yes":
            print("----------Learning Python -----------")
        elif options == "no":
            ask = input("Which language do you  want learn instead  ?")
           
            print("A: Add course")
            print("B: See lists of courses")
            print("Q: Exit ")
            checkCourseExist = input("Please Check our Existing courses :Choose : ")
            
            if checkCourseExist =="A":
                languages.append(ask)

                if checkCourseExist == "A":
                    for language in languages:
                        print(f"List of courses : {language}")
            if checkCourseExist == "B":
                    for language in languages:
                        print(f"List of courses : {language}")        

            if checkCourseExist == "Q":
                print('The program  stopped ! ')
                break
        else:
            break

    else:
        print("Your Informations are  required .")
       
