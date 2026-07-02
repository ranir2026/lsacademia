import re
#  inputs: html file


# 2 cases:
## x points out of possible x
## y point out of possible 1

def findAllInstancesOfSubstring(substring, string):
    return [m.start() for m in re.finditer(substring, string)]


def getAllAssignmentGrades(html):
    """ parameter html expects a string containing all the html of the google classroom page
        + the function returns a list of lists containing the assignment, grade and point value as floats
        for example [[1, 2], [5, 5]]
      """

    file_contents = html

    ### CASE 1: " points out of possible "
    instances = findAllInstancesOfSubstring(" points out of possible ", file_contents)
    all_points_earned = []

    for i in instances:
        indiv_assignment = []
        offset = 0
        if i < len(file_contents):
            # Iterate backward until reaching a ">"
            while i - offset >= 0 and file_contents[i - offset] != ">":
                indiv_assignment.insert(0, file_contents[i - offset])
                offset += 1

            # reset and go forward until u hit a <
            offset = 0
            indiv_assignment = ["".join(indiv_assignment).strip(), ""]
            while file_contents[i + len(" points out of possible ") + offset] != "<":
                indiv_assignment[1] += file_contents[i + len(" points out of possible ") + offset]
                offset += 1

        all_points_earned.append(indiv_assignment)

    ### CASE 2: " point out of possible "
    instances = findAllInstancesOfSubstring(" point out of possible ", file_contents)

    for i in instances:
        indiv_assignment = []
        offset = 0
        if i < len(file_contents):
            # Iterate backward until reaching a ">"
            while i - offset >= 0 and file_contents[i - offset] != ">":
                indiv_assignment.insert(0, file_contents[i - offset])
                offset += 1

            # reset and go forward until u hit a <
            offset = 0
            indiv_assignment = ["".join(indiv_assignment).strip(), ""]
            while file_contents[i + len(" point out of possible ") + offset] != "<":
                indiv_assignment[1] += file_contents[i + len(" point out of possible ") + offset]
                offset += 1

        all_points_earned.append(indiv_assignment)

    # its helpful if u convert all the grade point values to floats
    for assignment in all_points_earned:
        assignment[0] = float(assignment[0])
        assignment[1] = float(assignment[1])

    return all_points_earned

def calculateRequiredNumPoints(pE, pT, pR, target):
    """ pE = points currently earned
        pT = total points
        pR = points remaining
        target = desired grade
       """

    return round((target/100) * (pT + pR) - pE, 1)


# # for now just grab assume the file is downloaded locally
# ## this will change when it is integrated with the frontend
# f = open("exampleGrades/myBioComplete.htm", "r")
# file_contents = f.read()


# all_grades = getAllAssignmentGrades(file_contents)

# pE, pT = 0, 0
# for grade in all_grades:
#     pE += grade[0]
#     pT += grade[1]

# print(f"OVERALL RUNNING TOTAL AVERAGE: {pE/pT}")
# print(f"to get an A for the semester, with 175 points left, you need {calculateRequiredNumPoints(pE, pT, 175, 92.5)} more points")

# f.close()
