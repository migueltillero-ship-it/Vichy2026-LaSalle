"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Users, GraduationCap, Send, CheckCircle2, Plane, Home, BookOpen } from "lucide-react"
import Image from "next/image"

export function VichyContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    frenchLevel: "",
    tripDuration: "",
    preferredDate: "",
    accommodation: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="min-h-screen bg-background">
      {/* Elegant Header */}
      <header className="relative bg-[#1a1f35] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Barra de Logos Institucionales — fondos transparentes */}
        <div className="relative bg-white border-b border-gray-100">
          <div className="mx-auto max-w-4xl px-10 py-6">
            <div className="flex items-center justify-center gap-0">

              {/* Alliance Francaise — PNG transparente */}
              <div className="flex-1 flex items-center justify-center py-3">
                <Image
                  src="/images/logo-af.png"
                  alt="Alliance Francaise San Cristobal de las Casas"
                  width={180}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                  loading="eager"
                />
              </div>

              <div className="w-px h-14 bg-gray-150 flex-shrink-0" />

              {/* La Salle — PNG transparente */}
              <div className="flex-1 flex items-center justify-center py-3">
                <Image
                  src="/images/logo-lasalle.png"
                  alt="Centro de Estudios La Salle de San Cristobal"
                  width={120}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                  loading="eager"
                />
              </div>

              <div className="w-px h-14 bg-gray-150 flex-shrink-0" />

              {/* CAVILAM — PNG transparente */}
              <div className="flex-1 flex items-center justify-center py-3">
                <Image
                  src="/images/logo-cavilam.png"
                  alt="CAVILAM Alliance Francaise"
                  width={180}
                  height={80}
                  className="h-11 w-auto object-contain"
                  priority
                  loading="eager"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Hero — ilustracion de Paris como fondo tenue, texto sobrio a la izquierda */}
        <div className="relative overflow-hidden">
          {/* Ilustracion Paris: fondo tenue, desenfocado, integrado */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/images/paris-illustration.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-[0.07]"
              priority
            />
            {/* Velo oscuro sobre la ilustracion para no competir con el texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f35] via-[#1a1f35]/90 to-[#1a1f35]/60" />
          </div>

          <div className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-0 items-center">

                {/* Izquierda — Texto sobrio y clasico */}
                <div className="max-w-xl">
                  <p className="text-[10px] font-medium tracking-[0.45em] text-[#c8102e]/80 uppercase mb-8">
                    Alianza por la Excelencia Educativa
                  </p>
                  <h1 className="font-serif font-normal text-white/90 leading-[1.1]">
                    <span className="block text-5xl lg:text-6xl">Vichy & Paris</span>
                    <span className="block text-6xl lg:text-7xl text-white mt-1">2026</span>
                  </h1>
                  <div className="mt-6 w-12 h-px bg-[#c8102e]/60" />
                  <p className="mt-8 text-base text-white/55 leading-relaxed max-w-md">
                    18 dias de inmersion linguistica en el corazon de Francia. El prestigioso CAVILAM — Alliance Francaise, centro de excelencia reconocido mundialmente.
                  </p>

                  {/* Stats minimalistas */}
                  <div className="mt-12 flex items-center gap-10">
                    <div>
                      <p className="font-serif text-3xl font-light text-white/90">18</p>
                      <p className="text-[10px] text-white/35 uppercase tracking-[0.2em] mt-1">Dias</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="font-serif text-3xl font-light text-white/90">2</p>
                      <p className="text-[10px] text-white/35 uppercase tracking-[0.2em] mt-1">Ciudades</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="font-serif text-3xl font-light text-white/90">A1–C2</p>
                      <p className="text-[10px] text-white/35 uppercase tracking-[0.2em] mt-1">Niveles</p>
                    </div>
                  </div>
                </div>

                {/* Derecha — ilustracion Paris visible y elegante */}
                <div className="hidden lg:flex items-center justify-end relative h-[420px]">
                  <Image
                    src="/images/paris-illustration.jpg"
                    alt="Paris — Torre Eiffel y monumentos"
                    width={380}
                    height={420}
                    className="h-full w-auto object-contain object-bottom"
                    style={{
                      maskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 40%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.9) 60%, transparent 100%)",
                      maskComposite: "intersect",
                      opacity: 0.75,
                    }}
                    priority
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Info */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* CAVILAM Feature Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CAVILAM-AF-SITE-ACCUEIL-Cavilam-Center-of-excellence-MqkyCK9k7fhay7wNzGVNeipodxaNhk.jpg"
                alt="CAVILAM Alliance Francaise - Centro de Excelencia"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f35] via-[#1a1f35]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-medium tracking-[0.2em] text-[#c8102e] uppercase mb-2">Destino</p>
                <h3 className="font-serif text-xl text-white">CAVILAM - Alliance Francaise</h3>
                <p className="text-sm text-white/70 mt-1">Centro de Excelencia en Vichy</p>
              </div>
            </div>

            {/* Program Highlights */}
            <div>
              <h2 className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-8">
                El Programa Incluye
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Cursos de Frances Intensivos",
                    desc: "20 horas semanales con profesores nativos certificados del CAVILAM",
                  },
                  {
                    icon: Home,
                    title: "Alojamiento Seleccionado",
                    desc: "Familia de acogida, residencia estudiantil o apartamento independiente",
                  },
                  {
                    icon: Plane,
                    title: "Actividades Culturales",
                    desc: "Excursiones, visitas guiadas y descubrimiento del patrimonio frances",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <h2 className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
                Informacion y Contacto
              </h2>
              <div className="space-y-5">
                <div>
                  <p className="font-medium text-foreground">Colegio La Salle</p>
                  <p className="text-sm text-muted-foreground">San Cristobal de las Casas</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Director</p>
                  <p className="font-medium text-foreground">Miguel Tillero</p>
                  <p className="text-sm text-muted-foreground">Alliance Francaise de San Cristobal de las Casas</p>
                </div>
              </div>
              
              {/* QR Code */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 text-center">
                  Escanea para contactar
                </p>
                <div className="flex justify-center">
                  <div className="relative w-36 h-36 bg-white rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="/images/qr-contact.jpeg"
                      alt="QR de contacto Alliance Francaise"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Price Card */}
            <div className="relative overflow-hidden bg-[#1a1f35] text-white rounded-2xl p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8102e]/20 rounded-full blur-3xl" />
              <div className="relative">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-3">Inversion - 18 dias</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-white/50">desde</span>
                  <span className="font-serif text-5xl font-light">3.599</span>
                  <span className="text-lg text-white/70">EUR</span>
                </div>
                <p className="text-sm text-white/50 mt-2">Vichy & Paris 2026</p>
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-sm text-white/70">
                  <p>Inmersion linguistica</p>
                  <p>Alojamiento</p>
                  <p>Paris incluido</p>
                  <p>Seguro de viaje</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="sticky top-8">
              <div className="bg-card rounded-3xl shadow-2xl shadow-primary/5 border border-border p-8 lg:p-12">
                <div className="mb-10">
                  <p className="text-xs font-medium tracking-[0.3em] text-primary uppercase mb-3">Inmersion Linguistica</p>
                  <h2 className="font-serif text-3xl text-card-foreground">Vichy & Paris 2026</h2>
                  <p className="text-muted-foreground mt-3">Completa el formulario para recibir informacion detallada sobre los 18 dias de inmersion. Te contactaremos en las proximas 48 horas.</p>
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground">Merci beaucoup!</h3>
                    <p className="text-muted-foreground mt-3 max-w-sm">Tu solicitud ha sido recibida. Nos pondremos en contacto contigo muy pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Info */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Nombre
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Tu nombre"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Apellido
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Tu apellido"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Correo Electronico
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="correo@ejemplo.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Telefono
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+52 000 000 0000"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Edad
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="18"
                          min="16"
                          max="99"
                          value={formData.age}
                          onChange={(e) => handleChange("age", e.target.value)}
                          className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Nivel de Frances
                        </Label>
                        <Select onValueChange={(value) => handleChange("frenchLevel", value)} required>
                          <SelectTrigger className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20">
                            <SelectValue placeholder="Selecciona tu nivel" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a1">A1 - Principiante</SelectItem>
                            <SelectItem value="a2">A2 - Elemental</SelectItem>
                            <SelectItem value="b1">B1 - Intermedio</SelectItem>
                            <SelectItem value="b2">B2 - Intermedio avanzado</SelectItem>
                            <SelectItem value="c1">C1 - Avanzado</SelectItem>
                            <SelectItem value="c2">C2 - Dominio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Duracion de la Estancia
                        </Label>
                        <Select onValueChange={(value) => handleChange("tripDuration", value)} required>
                          <SelectTrigger className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20">
                            <SelectValue placeholder="Selecciona duracion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 semana</SelectItem>
                            <SelectItem value="2">2 semanas</SelectItem>
                            <SelectItem value="3">3 semanas</SelectItem>
                            <SelectItem value="4">4 semanas</SelectItem>
                            <SelectItem value="8">8 semanas</SelectItem>
                            <SelectItem value="12">12 semanas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate" className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                          Fecha de Inicio Deseada
                        </Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleChange("preferredDate", e.target.value)}
                          className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                        Tipo de Alojamiento Preferido
                      </Label>
                      <Select onValueChange={(value) => handleChange("accommodation", value)} required>
                        <SelectTrigger className="h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Selecciona tu preferencia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="family">Familia de acogida francesa</SelectItem>
                          <SelectItem value="residence">Residencia estudiantil</SelectItem>
                          <SelectItem value="hotel">Hotel asociado</SelectItem>
                          <SelectItem value="apartment">Apartamento independiente</SelectItem>
                          <SelectItem value="none">Sin alojamiento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                        Mensaje o Preguntas (opcional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Cuentanos tus motivaciones, preguntas o necesidades especiales..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="min-h-[120px] bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 resize-none placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Solicitud
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Al enviar este formulario, aceptas nuestra{" "}
                      <a href="#" className="underline hover:text-primary transition-colors">politica de privacidad</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Institucional */}
      <footer className="bg-[#0f1219] text-white py-20">
        <div className="mx-auto max-w-5xl px-8">
          <div className="flex flex-col items-center gap-12">
            
            {/* Etiqueta */}
            <p className="text-xs font-medium tracking-[0.3em] text-white/40 uppercase">
              Organizadores
            </p>
            
            {/* Logos institucionales — fondo blanco, mix-blend-mode para JPGs */}
            <div className="bg-white rounded-2xl px-12 py-8 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-center gap-0">

                {/* Alliance Francaise — transparente */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/images/logo-af.png"
                    alt="Alliance Francaise San Cristobal de las Casas"
                    width={160}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>

                <div className="w-px h-10 bg-gray-200 flex-shrink-0" />

                {/* La Salle — transparente */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/images/logo-lasalle.png"
                    alt="Centro de Estudios La Salle de San Cristobal"
                    width={110}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>

                <div className="w-px h-10 bg-gray-200 flex-shrink-0" />

                {/* CAVILAM — transparente */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logocavilam2024-PBURfenD0qPoj5DTR52heAlX8WU3L1.png"
                    alt="CAVILAM Alliance Francaise"
                    width={160}
                    height={60}
                    className="h-11 w-auto object-contain"
                  />
                </div>

              </div>
            </div>
            
            {/* Linea decorativa */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Texto institucional */}
            <div className="text-center space-y-2">
              <p className="text-sm text-white/60">
                Alliance Francaise de San Cristobal de las Casas
              </p>
              <p className="text-xs text-white/30">
                Alianza por la Excelencia Educativa - 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
