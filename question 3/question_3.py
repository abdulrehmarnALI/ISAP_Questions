import csv
import os
import sys

py_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(py_dir)

data_path = 'NIFTY50_all.csv'
batch_size = 1500

def process_data(batch, i):
            print(f"Processing batch {i} with {len(batch)} rows")
            print("----- amazing stuff is happening with this data -----")

def batch_processor(file_path, batch_size):
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        header = next(reader, None)
        current_batch = []
        i = 1
        for row in reader:
            current_batch.append(row)
            if len(current_batch) >= batch_size:
                process_data(current_batch, i)
                i += 1
                current_batch = []
        
        if current_batch:
                process_data(current_batch, i)

batch_processor(data_path, batch_size)
