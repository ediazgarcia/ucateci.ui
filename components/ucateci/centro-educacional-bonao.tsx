import { Award, BookOpen, Globe2, Handshake, HeartHandshake, Sparkles, Users, Target, Eye, Star } from "lucide-react"

const VALORES = [
  { icon: Award, title: "Auto disciplina" },
  { icon: BookOpen, title: "Honestidad" },
  { icon: Target, title: "Responsabilidad" },
  { icon: Handshake, title: "Integridad" },
  { icon: HeartHandshake, title: "Amabilidad" },
  { icon: Sparkles, title: "Iniciativa" },
  { icon: Users, title: "Respeto" },
  { icon: Globe2, title: "Compañerismo" },
  { icon: Star, title: "Trabajo en equipo" },
  { icon: Award, title: "Alegría" },
  { icon: HeartHandshake, title: "Empatía" },
  { icon: Sparkles, title: "Bondad" },
]

export function CentroEducacionalBonao() {
  return (
    <section className="bg-background py-16 md:py-24" id="cebucateci">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Centro Educacional Bonao</span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            CEBUCATECI - Centro Educacional de Bonao (CEB)
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Una institución educativa comprometida con la excelencia académica y el desarrollo integral de sus estudiantes.
          </p>
        </div>

        {/* Logo Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Logo de UCATECI</h2>
          <div className="flex justify-center">
            {/* Placeholder for logo - you can replace with actual logo image */}
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
              UCATECI
            </div>
          </div>
        </div>

        {/* Filosofía Institucional */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Filosofía Institucional</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              El Centro Educacional de Bonao tiene como fin último la implementación de un proceso educativo, que permita lograr a nivel de excelencia, el desarrollo intelectual, ético, moral, afectivo, social, espiritual y físico del estudiante, tomando en cuenta su potencialidad humana y su individualidad. La educación se entiende como un proceso inacabable. Una acción de socialización y de búsqueda constante que forme los/as estudiantes para enfrentar los retos y desafíos propios de estos tiempos. Propugnamos por una educación liberadora, una educación para la vida.
            </p>
          </div>
        </div>

        {/* Propuesta de Filosofía institucional */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Propuesta de Filosofía Institucional</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              El Centro Educacional de Bonao (CEB) concibe la educación como un proceso integral, continuo y constante, orientado al desarrollo intelectual, ético, moral, afectivo, social, espiritual y físico del estudiante, respetando su individualidad y su potencial humano. Promueve una educación liberadora y humanista, centrada en la formación de personas capaces de enfrentar los desafíos actuales con responsabilidad, compromiso y sentido de la vida.
            </p>
          </div>
        </div>

        {/* Misión */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <Target className="mr-2" />
            Misión
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Proveer a sus estudiantes de las herramientas necesarias para convertirse en líderes con carácter y principios, y desarrollar sus potencialidades a través del trabajo constante, la autodisciplina, el servicio y el énfasis en un alto rendimiento académico, para que se conviertan en individuos con competencias múltiples que les permitan desarrollar su liderazgo en beneficio de la familia, la comunidad y el mundo.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <Eye className="mr-2" />
            Visión
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Ser uno de los mejores colegios bilingües de la República Dominicana. Promover una experiencia educativa integral, formando estudiantes capaces de alcanzar la excelencia en todas las áreas y potenciar su capacidad para descubrir en sí mismos sus talentos.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Valores</h2>
          <p className="text-muted-foreground mb-8">
            Nuestro compromiso en el CEB es fomentar los siguientes valores:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {VALORES.map((valor, index) => (
              <div key={index} className="flex items-center p-4 bg-card rounded-lg border">
                <valor.icon className="w-6 h-6 text-primary mr-3" />
                <span className="font-medium">{valor.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Historia */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Historia</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              El Centro Educacional de Bonao inició sus labores el 15 de septiembre de 1971. Surgió como una necesidad de la empresa minera Falconbridge Dominicana de ofrecer una educación de calidad a los hijos de sus empleados e incluir también, pero con cupo limitado, a los hijos de personas de la comunidad de Bonao con solvencia moral y económica.
            </p>
            <p className="mb-4">
              En esa época, el doctor Joaquín Balaguer ocupaba la presidencia de la República, en su segundo período de los doce años de gobierno. Con él, la Falconbridge firmó los acuerdos para la extracción y procesamiento de mineral, así como los beneficios que estos acuerdos generarían al país. Para ese entonces, la Cartera de Educación la dirigía Jaime Manuel Fernández, funcionario con el que se gestionaron los detalles para legalizar la instalación del centro educativo.
            </p>
            <p className="mb-4">
              En su segundo año, el CEB se adscribió al Liceo Elías Rodríguez de Bonao mediante la Resolución 162'72. En 1976, mediante la resolución 1504'76, se le otorgó la facultad de realizar sus propios exámenes y pruebas de aprovechamiento. Posteriormente, quedó exonerado de enviar los proyectos de exámenes a la Secretaría de Educación, hoy Ministerio de Educación de la República Dominicana (MINERD).
            </p>
            <p className="mb-4">
              Desde sus inicios hasta 1984, el CEB contó con dos programas académicos: uno oficial, con sus programas en español (desde 1.° de primaria hasta 4.° de secundaria), con colaboradores dominicanos; y otro en inglés (de 1.° de primaria a 10.° de secundaria), que seguía los programas de la educación americana, con personal extranjero.
            </p>
            <p className="mb-4">
              Ambos programas funcionaban totalmente independientes, aunque los estudiantes compartían las actividades deportivas, artísticas y culturales. Al programa en inglés asistían los hijos de empleados extranjeros y los hijos de empleados dominicanos que las familias desearan. El nivel inicial lo cursaban juntos todos los niños. No había diferencias. La enseñanza se impartía en ambos idiomas.
            </p>
            <p className="mb-4">
              En 1984, debido a una crisis económica de la empresa y a una disminución de la nómina del personal extranjero, se cerró el programa en inglés. El colegio continuó con un programa de inglés como primera lengua, que se impartía una hora al día. En este programa trabajaron profesores extranjeros hasta 1988. Ese mismo año comenzaron a trabajar profesores nacionales y esta práctica se mantiene hasta la actualidad.
            </p>
            <p>
              La estructura administrativa inicial estaba formada por una superintendente, un director del Programa Inglés y un director del Programa Oficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}