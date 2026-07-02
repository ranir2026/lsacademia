import csv

def formatPOSasDict():
    # Subject,Course Name,Course ID,Duration,Credits,Grades Open,Meetings per 2 Weeks,Global Scholars Requirement
    # NEEDED: subject, course name, credits, grades open

    # GEEKS CODE
    #https://www.geeksforgeeks.org/working-csv-files-python/#reading-csv-files-into-a-dictionary-withcsv

    # Open the CSV file for reading
    with open('programOfStudies.csv', mode='r') as file:
        # Create a CSV reader with DictReader
        csv_reader = csv.DictReader(file)

        # Initialize an empty dictionary to store the dictionaries
        posDict = {}

        # { courseName: {attributes}    }

        # Iterate through each row in the CSV file
        for row in csv_reader:
            # Append each row (as a dictionary) to the dictionary
            posDict[row['Course Name']] = row

    return posDict

    # SEND AJAX REQUEST FROM PYTHON TO JAVASCRIPT WITH POS DICT


