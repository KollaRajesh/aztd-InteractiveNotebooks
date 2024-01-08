#pip install python-dotenv
#pip install pyodbc
#pip install --trusted-host=pypi.org --trusted-host=files.pythonhosted.org --user  python-dotenv
#pip install --trusted-host=pypi.org --trusted-host=files.pythonhosted.org --user  pyodbc
#pip install  --trusted-host=pypi.org --trusted-host=files.pythonhosted.org  ipykernel -U --user --force-reinstall
#pip install  --trusted-host=pypi.org --trusted-host=files.pythonhosted.org  --upgrade --user pip
#pip install --trusted-host=pypi.org --trusted-host=files.pythonhosted.org --user pandas
#python.exe -m pip install --trusted-host=pypi.org --trusted-host=files.pythonhosted.org --user  --upgrade pip
pip install --trusted-host=pypi.org --trusted-host=files.pythonhosted.org --user   install sqlalchemy
import pandas as pd 
import pyodbc
import os
server ='ServerName'
database='DatabaseMa,e'
connection_string=f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};Trusted_Connection=yes;'
sql_conn=pyodbc.connect(connection_string)

#1.Read sql using data frame
query="Select top 10 * from  Errors where  ErrorID =323"
df= pd.read_sql(query,sql_conn)

#2.read sql query using sql file
sqlfile=f'1.OverviewHourlyReportForToday.sql'
 #read content from file 
with open(sqlfile,'r') as file:
    sqlquery=file.read()

cursor=sql_conn.cursor()
cursor.execute(sqlquery)
#2.1 commit executed query 
#curson.commit()

#2.2 fetch cursor
rows=cursor.fetchall()
for row in rows:
 print(row)
display(df[df['CosignerTrID']==59.0])

df=pd.read_sql(sqlquery,sql_conn)

display(df)
