defmodule Example.Repo do
  use Ecto.Repo,
    otp_app: :web_component_example,
    adapter: Ecto.Adapters.Postgres
end
