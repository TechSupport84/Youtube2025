import math
# Square 
#float decimal int for whole number .
# exponent ** , *M , /d , +Plus -Minus.
side  =  float(input("What is  the length of a side  of the square ?  : "))
area  = side ** 2
print(f"The area  of the  square  is  :  {area}")
#Rectangle
length = float(input("What is  the  length of the  rectangle ? : "))
width = float (input(" What is the width  of the rectangle  ? : "))
area  = length * width

print(f"The area  of rectangle is  : {area}")


# Circler
radius = float (input("What is  the  radius  of the circle ? : "))
area = math.pi * (radius **2)
print(f"The area  of the  circle is  :{area}")
#pi = 3.14
#------------------------------------------
print("--------------------------------------------------------------------------------------------")
length = float(input(" Enter the single  length  value in(cm) : "))
square_area_cm2 = length ** 2
square_area_cm2 = square_area_cm2 / 10000
print(f"the ara of the  square is  : {square_area_cm2:.2f} sequare centimeterws ({square_area_cm2:.4f}square meters)   ")

#circle 
circle_area_cm2 = math.pi * length ** 2
circle_area_cm2 = circle_area_cm2/ 10000
print(f"The area  of the  circle  is :{circle_area_cm2:.2f} square centimeters ({circle_area_cm2:.4f}  square meters) ")

# Compute and display  the volume of cube .
cude_volume_cm3  = length **3
print(f"The volume of a cube  with side  {length:.2f} cm : is  {cude_volume_cm3:.2f} cubic centimeters")

#sphere  
sphere_volume_cm3 = (4/3)*math.pi * length **3

print(f"The  volume  of a sphere  with radius {length:.2f} cm is : {sphere_volume_cm3:.2f} cubic centimeters .")