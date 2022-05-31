def find_armstrong_numbers(numbers):
    res=[]
    string_form=[str(number) for number in numbers]
    sum=0
    for number in string_form:
        sum=0
        pow=len(list(number))
        for digit in number:
            working_digit=int(digit)**pow
            sum+=working_digit
        if sum == int(number):
            res.append(number)
      
    return res

