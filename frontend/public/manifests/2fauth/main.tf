terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_deployment" "twofauth" {
  metadata {
    name = "2fauth"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "2fauth"
      }
    }

    template {
      metadata {
        labels = {
          app = "2fauth"
        }
      }

      spec {
        container {
          name  = "2fauth"
          image = "2fauth/2fauth:latest"

          port {
            container_port = 8000
          }

          env {
            name  = "APP_NAME"
            value = "2FAuth"
          }

          env {
            name  = "APP_ENV"
            value = "production"
          }

          env {
            name  = "DB_CONNECTION"
            value = "sqlite"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "twofauth" {
  metadata {
    name = "2fauth"
  }

  spec {
    type = "ClusterIP"

    selector = {
      app = "2fauth"
    }

    port {
      port        = 80
      target_port = 8000
    }
  }
}
