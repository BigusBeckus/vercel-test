from http.server import BaseHTTPRequestHandler
import urllib.parse

# I don't know how to do web APIs in Python either
class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    query_name = urllib.parse.parse_qs(self.path[2:])["name"]
    name = query_name if len(query_name) > 0 else "Dave"
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    self.wfile.write(f"Hello {name} from the Python file.")