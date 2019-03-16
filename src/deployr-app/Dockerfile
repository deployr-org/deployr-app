FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS base
WORKDIR /out
EXPOSE 80
EXPOSE 443

FROM node:8-alpine AS frontend
RUN npm install @vue/cli@">= 3.0.0 <4.0.0" -g
WORKDIR /app
COPY src/deployr-app/app ./
RUN npm ci --silent && npm outdated && npm run build

FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /build
COPY ["src/deployr-app/Deployr.App.csproj", "src/deployr-app/"]
RUN dotnet restore "src/deployr-app/Deployr.App.csproj"
COPY . .
WORKDIR /build/src/deployr-app/
RUN dotnet build "Deployr.App.csproj" -c Release -o /out

FROM build AS publish
RUN dotnet publish "Deployr.App.csproj" -c Release -o /out

FROM base AS final
WORKDIR /out
COPY --from=frontend app/dist app/dist
COPY --from=publish /out .
ENTRYPOINT ["dotnet", "Deployr.App.dll"]