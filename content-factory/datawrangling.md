# Data Wrangling Part 1

## 1. What is Data Wrangling
Data wrangling is a broad term used, often informally, to describe the process of transforming raw data to a clean and organized format ready for use. For us, data wrangling is only one step in preprocessing our data, but it is an important step.

In this scenario, we will cover a wide variety of techniques to manipulate data frames using the pandas library with the goal of creating a clean, well-structured set of observations for further preprocessing.

## 2. Creating a Data Frame

__Problem__
You want to create a new data frame.

Solution
pandas has many methods of creating a new DataFrame object. One easy method is to create an empty data frame using DataFrame and then define each column separately:

__Load library__
```
import pandas as pd
```


__Create DataFrame__
```
dataframe = pd.DataFrame()
```
__Add columns__
```
dataframe['Name'] = ['Jacky Jackson', 'Steven Stevenson']
dataframe['Age'] = [38, 25]
dataframe['Driver'] = [True, False]
```

__Show DataFrame__
dataframe

Alternatively, once we have created a DataFrame object, we can append new rows to the bottom:

__Create row__
```
new_person = pd.Series(['Molly Mooney', 40, True], index=['Name','Age','Driver'])
```

__Append row__
```
dataframe.append(new_person, ignore_index=True)
```

__Discussion__<br>
pandas offers what can feel like an infinite number of ways to create a DataFrame. In the real world, creating an empty DataFrame and then populating it will almost never happen. Instead, our DataFrames will be created from real data we have loading from other sources (e.g., a CSV file or database).


## 3. Describing the Data

__Problem__
You want to view some characteristics of a DataFrame.

__Solution__
One of the easiest things we can do after loading the data is view the first few rows using head:

__Load library__
    
    import pandas as pd

__Create URL__

    url = 'https://tinyurl.com/titanic-csv'

__Load data__
dataframe = pd.read_csv(url)

__Show two rows__

    dataframe.head(2)
    
We can also take a look at the number of rows and columns:

__Show dimensions__

    dataframe.shape
    
Additionally, we can get descriptive statistics for any numeric columns using describe:

__Show statistics__

    dataframe.describe()
    
__Discussion__<br>
After we load some data, it is a good idea to understand how it is structured and what kind of information it contains. Ideally, we would view the full data directly. But with most real-world cases, the data could have thousands to hundreds of thousands to millions of rows and columns. Instead, we have to rely on pulling samples to view small slices and calculating summary statistics of the data.

In our solution, we are using a toy dataset of the passengers of the Titanic on her last voyage. Using head we can take a look at the first few rows (five by default) of the data. Alternatively, we can use tail to view the last few rows. With shape we can see how many rows and columns our DataFrame contains. And finally, with describe we can see some basic descriptive statistics for any numerical column.

It is worth noting that summary statistics do not always tell the full story. For example, pandas treats the columns Survived and SexCode as numeric columns because they contain 1s and 0s. However, in this case the numerical values represent categories. For example, if Survived equals 1, it indicates that the passenger survived the disaster. For this reason, some of the summary statistics provided don’t make sense, such as the standard deviation of the SexCode column (an indicator of the passenger’s gender).


## 4. Navigating DataFrames
__Problem__
You need to select individual data or slices of a DataFrame.

__Solution__
Use loc or iloc to select one or more rows or values:

__Load library__
    
    import pandas as pd

__Create URL__
    
    url = 'https://tinyurl.com//titanic-csv'

__Load data__
    
    dataframe = pd.read_csv(url)

__Select first row__
    
    dataframe.iloc[0]
We can use : to define a slice of rows we want, such as selecting the second, third, and fourth rows:

__Select three rows__
    
    dataframe.iloc[1:4]
We can even use it to get all rows up to a point, such as all rows up to and including the fourth row:

__Select three rows__
    
    dataframe.iloc[:4]
DataFrames do not need to be numerically indexed. We can set the index of a DataFrame to any value where the value is unique to each row. For example, we can set the index to be passenger names and then select rows using a name:

__Set index__
    
    dataframe = dataframe.set_index(dataframe['Name'])

__Show row__
    
    dataframe.loc['Allen, Miss Elisabeth Walton']

__Discussion__<br>
All rows in a pandas DataFrame have a unique index value. By default, this index is an integer indicating the row position in the DataFrame; however, it does not have to be. DataFrame indexes can be set to be unique alphanumeric strings or customer numbers. To select individual rows and slices of rows, pandas provides two methods:

loc is useful when the index of the DataFrame is a label (e.g., a string).

iloc works by looking for the position in the DataFrame. For example, iloc[0] will return the first row regardless of whether the index is an integer or a label.

It is useful to be comfortable with both loc and iloc since they will come up a lot during data cleaning.