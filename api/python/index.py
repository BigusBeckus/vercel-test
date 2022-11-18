# # I don't know how to do web APIs in Python either
from sanic import Sanic
from sanic.response import text
app = Sanic(name="api-python-index")


@app.route('/')
@app.route("/<path:path>")
async def index(request, path=""):
  print("hello")
  print(path)
  return text("hello")