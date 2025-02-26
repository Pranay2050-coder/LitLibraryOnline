from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Load the cleaned dataset
df = pd.read_csv("image_dataset_cleaned_5000.csv")

@app.route('/')
def home():
    return render_template("main.html", books=df.to_dict(orient="records"))

@app.route('/book/<int:main>')
def book_detail(main):
    book = df.iloc[main]
    return render_template("book.html", book=book)

if __name__ == '__main__':
    app.run(debug=True)
