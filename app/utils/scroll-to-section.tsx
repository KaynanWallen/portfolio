import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Função para lidar com cliques em links de âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")

      // Verificar se é um link de âncora interno
      if (href && href.startsWith("#")) {
        e.preventDefault()

        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Ajuste para compensar o header fixo
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Adicionar event listener para todos os links
    document.addEventListener("click", handleAnchorClick)

    // Limpar event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}