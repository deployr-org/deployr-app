FROM microsoft/dotnet:2.2-aspnetcore-runtime-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk-stretch AS build
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