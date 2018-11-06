use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :web_component_example, ExampleWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :web_component_example, Example.Repo,
  username: "postgres",
  password: "postgres",
  database: "web_component_example_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
