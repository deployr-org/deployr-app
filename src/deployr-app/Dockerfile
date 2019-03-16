FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /build
COPY ["src/deployr-app/Deployr.App.csproj", "src/deployr-app/"]
RUN dotnet restore "src/deployr-app/Deployr.App.csproj"
COPY . .
WORKDIR "/build/src/deployr-app/"
RUN dotnet build "Deployr.App.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Deployr.App.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Deployr.App.dll"]