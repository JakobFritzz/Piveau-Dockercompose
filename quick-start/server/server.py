import http.server
import socketserver
from http.server import SimpleHTTPRequestHandler

class CustomHandler(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        if path.endswith(".xml"):
            return "application/rdf+xml"
        return super().guess_type(path)

PORT = 8000
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()