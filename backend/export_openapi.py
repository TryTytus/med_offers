import json
from pathlib import Path

from main import app


output_path = Path(__file__).with_name("openapi.json")
output_path.write_text(
    json.dumps(app.openapi(), indent=2) + "\n",
    encoding="utf-8",
)

print(f"OpenAPI schema written to {output_path}")
