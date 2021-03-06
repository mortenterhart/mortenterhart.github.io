﻿---
title: Zusammenfassung IT-Security
layout: default
permalink: Semester_5/IT_Security/2018-12-11_zusammenfassung_md
filepath: Semester_5/IT_Security/2018-12-11_zusammenfassung.md
---

# Zusammenfassung IT-Security
_geschrieben am 11.12.18 von Morten Terhart_

---

* [Einführung in die Informationssicherheit](#einführung-in-die-informationssicherheit)
  * [Mögliche Angriffe](#mögliche-angriffe)
  * [MOM (Motive, Opportunity, Method)](#mom-motive-opportunity-method)
  * [Motive für einen Angriff](#motive-für-einen-angriff)
  * [Begriff der Informationssicherheit](#begriff-der-informationssicherheit)
  * [Maßnahmen zur Informationssicherheit](#maßnahmen-zur-informationssicherheit)
  * [Ziele der Informationssicherheit](#ziele-der-informationssicherheit)
  * [Bedeutung](#bedeutung)
  * [Ziele und Ursachen von Bedrohungen](#ziele-und-ursachen-von-bedrohungen)
  * [Angriff und Schutz](#angriff-und-schutz)
  * [Bedrohungen und Maßnahmen](#bedrohungen-und-maßnahmen)
  * [Klassifizierung von Informationen](#klassifizierung-von-informationen)
  * [Management der Informationssicherheit](#management-der-informationssicherheit)
  * [Maßnahmen zur Gewährleistung der Informationssicherheit](#maßnahmen-zur-gewährleistung-der-informationssicherheit)
  * [Funktionsweise eines ISMS-Systems](#funktionsweise-eines-isms-systems)
    * [Schritte zu einem ISMS-System](#schritte-zu-einem-isms-system)
  * [Schutz der Infrastruktur](#schutz-der-infrastruktur)
    * [Firewall](#firewall)
    * [Demilitarisierte Zone (DMZ)](#demilitarisierte-zone-dmz)
    * [Intrusion Detection Systeme (IDS)](#intrusion-detection-systeme-ids)
    * [Intrusion Prevention System (IPS)](#intrusion-prevention-system-ips)
    * [Trennung der Netzwerke](#trennung-der-netzwerke)
    * [Zugriffsbeschränkungen](#zugriffsbeschränkungen)
    * [Redundanz der Systeme](#redundanz-der-systeme)
  * [Schutz der Daten](#schutz-der-daten)
    * [Verteilte Datenhaltung](#verteilte-datenhaltung)
  * [Penetrationstests](#penetrationstests)
    * [Ziele](#ziele)
    * [Legalität](#legalität)
    * [Vorgehensweise](#vorgehensweise)
    * [Risiken](#risiken)
* [Secure Development Life Cycle (SDLC)](#secure-development-life-cycle-sdlc)
  * [Ziele](#ziele-1)
  * [Kryptofehler](#kryptofehler)
  * [Phasen eines SDLC](#phasen-eines-sdlc)
    * [Vorbereitungsphase](#vorbereitungsphase)
    * [Design-Phase](#design-phase)
    * [Entwicklungsphase](#entwicklungsphase)
    * [Testphase](#testphase)
    * [Vorproduktionsphase](#vorproduktionsphase)
    * [Produktionsphase](#produktionsphase)
* [Erweiterte Security-Analyse](#erweiterte-security-analyse)
  * [Security-Analyse durch Reverse Code Engineering](#security-analyse-durch-reverse-code-engineering)
  * [Gründe für den Einsatz von IT-Forensik](#gründe-für-den-einsatz-von-it-forensik)
* [Der Heartbleed-Bug](#der-heartbleed-bug)
  * [Wodurch ist der Bug entstanden?](#wodurch-ist-der-bug-entstanden)
  * [Bedrohungen durch den Bug](#bedrohungen-durch-den-bug)
  * [Probleme durch den Bug](#probleme-durch-den-bug)
  * [Schutzmöglichkeiten](#schutzmöglichkeiten)
* [Aktive IT-Security-Analysen](#aktive-it-security-analysen)
  * [Voraussetzungen](#voraussetzungen)
  * [Vorhandene Tools](#vorhandene-tools)
  * [Potentielle Schwachstellen](#potentielle-schwachstellen)
* [Web-Security](#web-security)
  * [Penetrationstest](#penetrationstest)
  * [Techniken](#techniken)
  * [Cross Site Scripting (XSS)](#cross-site-scripting-xss)
    * [Typen von XSS](#typen-von-xss)
  * [XML External Entity Processing (XXE)](#xml-external-entity-processing-xxe)
    * [Angriffsarten](#angriffsarten)
    * [Besonderheiten](#besonderheiten)
    * [Vermeidung von XXE](#vermeidung-von-xxe)
  * [Path Traversal](#path-traversal)
    * [Beispiel](#beispiel)
  * [SQL Injection](#sql-injection)
  * [Session Manipulation](#session-manipulation)
    * [Techniken](#techniken-1)
  * [Werkzeuge eines Penetrationstesters](#werkzeuge-eines-penetrationstesters)
  * [Gegenmaßnahmen](#gegenmaßnahmen)
* [Web Application Firewall (WAF)](#web-application-firewall-waf)
  * [Gründe für eine WAF](#gründe-für-eine-waf)
  * [Implementierung](#implementierung)
  * [Web Intrusion Detection / Prevention](#web-intrusion-detection--prevention)
  * [Ansätze für Web Intrusion Prevention](#ansätze-für-web-intrusion-prevention)
  * [Erkennungsformen](#erkennungsformen)
  * [Apache Webserver als WAF](#apache-webserver-als-waf)
* [Kryptographie in der Praxis](#kryptographie-in-der-praxis)
  * [Begriffe aus der Kryptographie](#begriffe-aus-der-kryptographie)
  * [Sehr unsichere Verschlüsselungsverfahren](#sehr-unsichere-verschlüsselungsverfahren)
  * [Symmetrische und asymmetrische Verfahren](#symmetrische-und-asymmetrische-verfahren)
  * [Hybride Verschlüsselung](#hybride-verschlüsselung)
  * [RSA-Verschlüsselung](#rsa-verschlüsselung)
  * [Vorsicht beim RSA](#vorsicht-beim-rsa)
  * [Sichere Kommunikation mit symmetrischer Verschlüsselung](#sichere-kommunikation-mit-symmetrischer-verschlüsselung)
  * [Sicherheit des Diffie-Hellman-Verfahrens](#sicherheit-des-diffie-hellman-verfahrens)
  * [Transport Layer Security (TLS)](#transport-layer-security-tls)
    * [Funktionsweise](#funktionsweise)
    * [Vorteile von TLS](#vorteile-von-tls)
    * [Nachteile von TLS](#nachteile-von-tls)
  * [ECB-Modus für Blockchiffren](#ecb-modus-für-blockchiffren)
  * [CBC-Modus für Blockchiffren](#cbc-modus-für-blockchiffren)
* [Security-Analyse komplexer Systemumgebungen](#security-analyse-komplexer-systemumgebungen)
  * [Ziele](#ziele-2)
  * [Eigenschaften von Security-Analysen in unterschiedlichem Ausmaß](#eigenschaften-von-security-analysen-in-unterschiedlichem-ausmaß)
  * [Vorgehen bei der Security-Analyse](#vorgehen-bei-der-security-analyse)
    * [1. Schritt: Identifikation und Clusterung der Schutzziele](#1-schritt-identifikation-und-clusterung-der-schutzziele)
    * [2. Schritt: Identifikation der Kommunikationsbeziehungen](#2-schritt-identifikation-der-kommunikationsbeziehungen)
    * [3. Schritt: Schutzziele und Kommunikationsbeziehungen analysieren](#3-schritt-schutzziele-und-kommunikationsbeziehungen-analysieren)
    * [4. Schritt: Identifikation möglicher Bedrohungen und Verwundbarkeiten](#4-schritt-identifikation-möglicher-bedrohungen-und-verwundbarkeiten)
    * [5. Schritt: Ermitteln von Maßnahmen zur Reduzierung der möglichen Bedrohungen und Verwundbarkeiten](#5-schritt-ermitteln-von-maßnahmen-zur-reduzierung-der-möglichen-bedrohungen-und-verwundbarkeiten)
    * [6. Schritt: Durchführung von Risikoanalyse und Risikoakzeptanz](#6-schritt-durchführung-von-risikoanalyse-und-risikoakzeptanz)
* [Übungen zur Netzwerkanalyse](#Übungen-zur-netzwerkanalyse)
  * [nmap - Netzwerk- und Portscanner](#nmap---netzwerk--und-portscanner)
  * [Wireshark](#wireshark)
* [Übungen zum Website-Pentesting](#Übungen-zum-website-pentesting)
  * [ARP-Spoofing](#arp-spoofing)
    * [Vorgehensweise](#vorgehensweise-1)
* [Remote und Reverse Shell](#remote-und-reverse-shell)
  * [Remote Shell](#remote-shell)
  * [Reverse Shell](#reverse-shell)

## Einführung in die Informationssicherheit

### Mögliche Angriffe
* Unauthorized Access  
* Mobile Device Attack  
* System Compromise  
* Cyber Espionage  
* Social Engeneering  
* Spam  
* Maleware  
* Indsiders  
* DoS  
* Data Leakage  
* Phishing  
* Identy Theft

### MOM (Motive, Opportunity, Method)
Ein Angreifer muss MOM haben:
* **Motive**: Einen Grund, warum der Angreifer das System angreifen möchte
* **Opportunity**: Die Gelegenheit und Zeit, um den Angriff durchzuführen
* **Method**: Die notwendigen Fähigkeiten und Programme/Werkzeuge, um den Angriff durchzuführen

### Motive für einen Angriff
Mögliche Ziele eines Angriffs umfassen:
* Finanzdaten (Handelsgeheimnisse, Finanzkraft, Besitzverhältnisse und Finanzierung)
* Innovations-/Produktdaten (Entwicklungsdaten, Designs, Informationen über Schlüsselpositionen, Wissen über Kernprozesse)

### Begriff der Informationssicherheit
* Gewährleistung der Vertraulichkeit, Verfügbarkeit und Integrität (siehe auch CIA-Grundsatz) in einem informationsverarbeitenden System
* dient dem Schutz vor Gefahren, Bedrohungen, Vermeidung von Schäden und Risiken
* betrifft auch die Sicherheit von nicht elektronischen Informationen

### Maßnahmen zur Informationssicherheit
**auf sozialer Ebene**
* Sicherheitsrichtlinien (Security Policies)
* Absicherung der Prozesse
* Sensibilisierung für Gefahren, Trainings

**auf technischer Ebene**
* Information Security Management System (ISMS)
* Firewalls
* Virenschutz
* Einbruchsentdeckung und -verhinderung (IDS/IPS)
* Authentifizierung und Autorisierung
* Verschlüsselung
* Überprüfung und Begutachtung
* Datenbackups

### Ziele der Informationssicherheit
* Datensicherheit
* Authentizität
* Verbindlichkeit, Rückverfolgung möglich (Nachweisbarkeit)
* Zugriffssteuerung

### Bedeutung
* ständig neue Anforderungen an Informationssicherheit
* jeder ist auf IT-Systeme angewiesen
	* $\Rightarrow$ Unternehmen zu Informationssicherheit verpflichtet, Teil des Risikomanagements

### Ziele und Ursachen von Bedrohungen
**Ziele**:
* technischer Systemausfall
* Missbrauch des Systems
* Sabotage
* Spionage
* Betrug
* Diebstahl

**Ursachen**:
* höhere Gewalt (Naturkatastrophen)
* menschliche Fehler (z.B. Fehlbedienung)
* Viren oder Malware
* Spoofing, Phishing, Pharming
* Denial of Service (DoS)
* Man-in-the-middle-Angriff

### Angriff und Schutz
**Angriff**: jeder Vorgang, der das Ziel des Verlustes der Informationssicherheit hat (inklusive technisches Versagen)

**Schutz**: Statistische Informationssicherheit (Aufwand höher als Nutzen) und Absolute Informationssicherheit (kein Angriff möglich)

### Bedrohungen und Maßnahmen
* Aufkommen von Bedrohungen durch Mangel an Informationssicherheit
* Systeme sind kompromittiert, wenn ein Einbruch erfolgt ist
	* System gilt als unsicher und sollte nicht mehr benutzt werden
	* sofortige Maßnahmen zur Minimierung der Schäden (z.B. Datenrettung, Beweissicherung)

### Klassifizierung von Informationen
**Der CIA-Grundsatz**
* Vertraulichkeit (**C**onidentiality): Verhinderung von nicht autorisierter Veröffentlichung von Informationen
* Integrität (**I**ntegrity): Verhinderung von nicht autorisierter Erweiterung oder Zerstörung von Informationen
* Verfügbarkeit (**A**vailability): Verhinderung von nicht autorisierter Zurückhaltung von Informationen

### Management der Informationssicherheit
* Verabschieden von firmenweiten Informationssicherheitsrichtlinien (Security Policies)
* Einsatz eines Sicherheitsmanagementsystems (Information Security Management System (ISMS))
	* operative Umsetzung und Kontrolle der Security Policies
	* Schaffung geeigneter Organisations- und Managementstrukturen
	* ISMS nach ISO/IEC 2700x im Jahre 2005/2008

### Maßnahmen zur Gewährleistung der Informationssicherheit
* physische Sicherung der Daten
* Zugriffskontrollen
* fehlertolerante Systeme (Ausfallsicherheit)
* Verschlüsselung von Daten

**konkrete Maßnahmen**:
* Softwareaktualisierungen (besonders Sicherheitsupdates)
* Schutz vor Malware (Virenscanner)
* Einsatz von Firewalls (am besten verschiedene Hersteller, keine Monokulturen)
* Einschränkung der Benutzerrechte auf das Mindeste
* Erstellung von Backups
* Protokollierung
* Einsatz sicherer Entwicklungs- und Laufzeitumgebungen
* Sensibilisierung der Mitarbeiter (Security Audits etc.)

### Funktionsweise eines ISMS-Systems
![ISMS Funktionsweise](https://i.imgur.com/5AkFRp8.png)
#### Schritte zu einem ISMS-System
1. Unterstützung für das Management bekommen
2. Definiere den Wirkungsbereich des ISMS-Systems
3. Erhalte Informationen über die IT-Systeme (Inventory)
4. Lege Methoden des Risikomanagements fest und konsultiere die Berichte des Risikomanagements
5. Bereite den Einsatz des ISMS und den Plan für die Risikobehandlung vor
6. Entwickle Pläne für das ISMS-System

### Schutz der Infrastruktur

#### Firewall
* Beschränkung des Netzwerkzugriffs durch Regeln (bestimmte Adressen, Ports etc.)
* Einsatz von Filtertechnologien (z.B. Contentfilter)

#### Demilitarisierte Zone (DMZ)
* Subnetz mit stark kontrolliertem Zugriff auf die darin befindlichen Rechner/Server
* Isolation der Systeme gegenüber äußeren Netzwerken wie dem Internet
* Trennung der Netzwerke durch Firewalls

#### Intrusion Detection Systeme (IDS)
* System zur Erkennung von Angriffen auf ein Computersystem oder -netzwerk
* Ergänzung zur Firewall
* zwei Funktionen:
	* Vergleich bekannter Angriffssignaturen
	* heuristische Analysen zur Erkennung unbekannter Angriffssignaturen
* IDS löst Alarm aus, verhindert aber keinen Angriff

#### Intrusion Prevention System (IPS)
* Erweiterung eines IDS um Aktionen zur Verhinderung von Angriffen
* mögliche Aktionen bei netzwerkbasierten IPS:
	* Veränderung der Datenverbindung bei Angriff
	* Beeinflussung von Firewall-Regeln

#### Trennung der Netzwerke
* DMZ innerhalb eines Firmennetzwerkes
* Trennung der Netzwerke in unterschiedliche Verantwortungsbereiche (Office, Produktion, WLAN etc.)
* Zwischenschaltung von Firewalls, IDS/IPS und Routern mit ACL

#### Zugriffsbeschränkungen
* Rechte und Rollen gemäß dem Need-To-Know-Prinzip
* Authentifizierung bei jeglicher Software/Netzwerk
* Zugriff auf Werkzeuge/Materialien
* Zutritt in Gebäude

#### Redundanz der Systeme
* wichtige Kernsysteme redundant aufstellen
	* Rechenzentrum
	* Netzwerkinfrastruktur
	* Nutzung verschiedener Medien (Kabel, Funk, Satellit, WAN)
* **räumliche Trennung der Systeme** (z.B. bei Gebäudebrand oder Naturkatastrophen)
* Einsatz von Notstromsystemen

### Schutz der Daten
* durch **Verschlüsselung** (z.B. Daten, Datenbanksysteme, E-Mails)
* durch Gewährleistung der **Integrität** und **Authentizität**
* durch **RAID-Systeme** (**R**edundant **A**rray of **I**ndependent **D**isks)
	* Verteilung des logischen Speichers auf mehrere physikalische Festplatten
	* Ziel: Erhöhung der Datenverfügbarkeit und Datenlese- bzw. -schreibgeschwindigkeiten
* durch **Backups** (müssen regelmäßig auf Integrität überprüft werden)

#### Verteilte Datenhaltung
* Erhöhung der Informationssicherheit durch redundante Datenhaltung über mehrere Standorte hinweg (bei unkritischen Daten auch in Cloud möglich)
* geographische Trennung zwischen Betrieb und Backup
* Probleme:
	* Vertraulichkeit und Integrität muss sichergestellt sein
	* rechtliche Probleme bei Cloud-Backups wegen anderer Datenschutzbestimmungen im Ausland
	* sichere Verbindung zwischen Standorten während eines Backups

### Penetrationstests
* **Penetrationstest**: umfassende Sicherheitsüberprüfungen von Rechnern, Anwendungen (z.B. Websites) oder der Netzwerkinfrastruktur
* Einsatz von Mitteln, Wissen und Methoden eines Angreifers, um Zugang zum System zu erhalten

#### Ziele
* Identifikation von Schwachstellen
* Aufdecken von Fehlern
* Erhöhung der Sicherheit auf technischer und organisatorischer Ebene

#### Legalität
* Penetrationstests nur erlaubt, wenn sie mit der Organisation, die die Hoheit über das zu testende System innehat, vereinbart sind

#### Vorgehensweise
* Vorbereitungsphase mit Zielsetzung
* Informationsbeschaffungsphase mit Sicherheitsanalysten
* Bewertung der gewonnenen Informationen
* Aktive Eindringungsversuche
* Berichten der Ergebnisse

#### Risiken
* Störungen des normalen IT-Betriebs (z.B. Ausfall eines Systems)
* DoS-Tests vorher unbedint mit Betreibern absprechen
* Penetrationstesteer können an unternehmenskritische Informationen gelangen

## Secure Development Life Cycle (SDLC)

### Ziele
* Anwendung adäquater Sicherheitsverfahren in einem Entwicklungsprozess
* **Sicherheitsbedarf früh als nicht-funktionale Anforderung aufnehmen**
* Entstehungskosten reduzieren
* Sicherheit der Anwendung erhöhen
* Konformität zu den Sicherheitsrichtlinien
* Überblick über implementierte Sicherheit

### Kryptofehler
* DISCO: Don't Invent Super Crypto on your Own!
* auf bewährte Verfahren zurückgreifen
* Kryptoimplementierungen kritisch testen

### Phasen eines SDLC
1. Vorbereitungsphase (Kommunizieren, Planen, Anwendungsfälle analysieren, Anforderungen)
2. Design-Phase
3. Entwicklungsphase
4. Testphase
5. Vorproduktionsphase
6. Produktionsphase
7. Betriebsphase / Wartungsarbeiten
8. Ablösungsphase

#### Vorbereitungsphase
* Klassifizierung der Daten
* Definition der Sicherheitsanforderunge

#### Design-Phase
* Ermittlung von Bedrohungen
* Risikoanalyse
* Maßnahmen zur Risikominimierung festlegen und im Design umsetzen

#### Entwicklungsphase
* Programmieren mit Berücksichtigung der Sicherheit
* bekannte Fehler vermeiden
* Anwendung testen
* Qualitätssicherung

#### Testphase
* spätestens hier Penetrationstest durchführen
* ggf. Code Audits
* Beheben der gefundenen Fehler

#### Vorproduktionsphase
* Akzeptanz von Restrisiken
* Aufbereiten des Quellcodes (Kommentare entfernen etc.)
* ggf. Webserver-Hardening (WAF)

#### Produktionsphase
* Monitoring
* regelmäßige Überprüfung der Sicherheit durch Penetrationstests

## Erweiterte Security-Analyse

### Security-Analyse durch Reverse Code Engineering
* Tool für Analyse kompilierter Programme (Binärdateien) notwendig (z.B. IDApro)
* mögliche Schwachstelle: Passwort in Quellcode hart kodiert
	* Herausfinden des Passworts mittels einer Dissassembler-Analyse möglich
	* Statisches Hinterlegen von Passwörten und Krypto-Schlüsseln sehr anfällig
* Warum Reverse Code Engineering?
	* kein Zugriff auf Quellcode
	* Überprüfen der Security-Anforderungen
	* Überprüfen des kompilierten Programms auf mögliche Schwachstellen

### Gründe für den Einsatz von IT-Forensik
* Wiederherstellung gelöschter Informationen
* Analyse von Sicherheitsvorfällen
* post mortem Analyse: IT-Forensiker hat Hinterlassenschaften/Spuren des Angriffs zur Verfügung (Logfiles, Timestamps etc.)
* Sicherheitsvorfälle so schell wie möglich melden

## Der Heartbleed-Bug
* schwerwiegender Programmierfehler in OpenSSL (fehlende Überprüfung der gesendeten Payload-Länge)
* veröffentlicht mit der Version 1.0.1 am 14. Märt 2012
* Angriff hinterlässt keine verwertbaren Spuren auf dem System
* betroffen waren alle Systeme, die OpenSSL in den entsprechenden Versionen verwendet haben
	* viele verschiedene Protokolle/Kommunikationskanäle betroffen
	* viele Server betroffen, da OpenSSL die meist verwendete SSL/TLS-Bibliothek bei Webservern ist

### Wodurch ist der Bug entstanden?
* Implementierung von Heartbeat-Verfahren für DTLS-Verbindungen
* Funktion wurde von einem Studenten in seiner Dissertation zum SCTP-Protokoll entwickelt und als Entwurf bei OpenSSL eingereicht
* 2011 wurde es offiziell bei OpenSSL eingeführt
* Hauptproblem hierbei: eigene Funktionen für Allokation (`malloc`) und Deallokation (`free`) von Speicher implementiert, fehlende Überprüfung der tatsächlichen übergebenen Länge der Daten

### Bedrohungen durch den Bug
* Auslesen des Speichers der Anwendung (z.B. Zugangsdaten (Benutername, Passwort), privater Server-Key)
* Man-in-the-Middle-Angriffe mit dem ausgelesenen Server-Key
* Entschlüsselung von SSL/TLS-verschlüsselten Verbindungen
* Bug ist über 27 Monate in OpenSSL

### Probleme durch den Bug
* Kompromittierung sensibler Daten (Aussphähung) (Passwörter, Kreditkarteninformationen, VPN-Verbindungen etc.)
* SSL-Zertifikate können nicht zuverlässig und flächendeckend gesperrt werden
	* Browser arbeiten meist mit statischen Sperrlisten
	* Online-Überprüfung nur teilweise genutzt
* Vertrauensverlust auf Betreiberseite

### Schutzmöglichkeiten
* Perfect Forward Secrecy: Schutz gegenüber nachträglichem Entschlüsseln aufgezeichneter verschlüsselter Daten
* Einsatz von IDS/IPS: Muster hinzufügen/anpassen, das Heartbleed-Angriffe erkennt
* Erstellen neuer SSL/TLS-Server-Keys und Zertifikate
* Austausch aller genutzten SSL-Zertifikate
* Benutzer informieren
* Passwörter ändern

## Aktive IT-Security-Analysen

### Voraussetzungen
* Systeme für die Analyse festlegen
* Rahmenbedingungen schaffen
	* Festlegen der eingesetzten Tools
	* Intensität der Kompromittierung bzw. Tiefe der Eindringung festlegen
	* Umfang und Details der Dokumentation
* Ziele der Security-Analyse definieren
	* System verwundbar?
	* Verwundbarkeiten ausnutzen?
	* Maßnahmenplan für die Mitigation von Verwundbarkeiten

### Vorhandene Tools
* nmap (Netzwerkanalysewerkzeug und Portscanner)
	* kann sensible Informationen über verwendete Protokolle, Versionsnummern, Webserver und Betriebssysteme liefern (z.B. ssh v5.5p1, Apache 2.2.16 Debian, Linux 2.2.32)
	* darüber lassen sich Verwundbarkeiten in den einzelnen Komponenten herausfinden

### Potentielle Schwachstellen
* SQL-Injections und Cross Site Scripting (XSS) durch fehlende Eingabevalidierung
	* **Maßnahme**: Eingabevalidierung für alle vom Client an den Server übergebenen Parameter (GET und POST)
* Path Traversal durch Angabe eines eigenen Pfades in einer File-Upload-Funktion
	* **Maßnahme**: Filterung des Dateinamen auf unzulässige Zeichen
* Konfigurationsfehler (z.B. in der Upload-Funktion): Automatisches Setzen des Execute-Flags für hochgeladene Dateien
	* **Maßnahme**: Funktion so umschreiben, dass Execute-Flag nicht mehr gesetzt wird
* Verstecktes Admin-Menü
	* **Maßnahme**: Anzeigen der Seite nur nach Überprüfung der notwendigen Berechtigungen
* Unverschlüsselte Datenübertragung
	* **Maßnahme**: Umstellen von HTTP auf HTTPS-Verbindungen und Setzen der Secure-Cookie-Funktion im Webserver
	* kein Einsatz von bereits geknackten SSL-Versionen (am besten TLS)
* `robots.txt`-Datei: gibt sensible Daten über Datei-/Verzeichnispfade auf dem Webserver frei
	* **Maßnahme**: keine Verzeichnisse auflisten, die durch einen Webcrawler gefunden werden können

## Web-Security

### Penetrationstest
* ein umfangreicher Sicherheitstest einzelner Rechner oder Netzwerke
* Prüfung der Sicherheit möglichst aller Systembestandteile und Anwendungskomponenten
* Nutzen von Mitteln und Methoden eines Angreifers
* **Ziel**: unautorisiert Zugang zu einem System bekommen

### Techniken
* Bufferoverflow Angriffe
* Code Injection und Code Execution
* Cross Site Scripting (XSS)
* XML External Entity Processing (XXE)
* Man-in-the-Middle-Angriffe
* Path Traversal Angriffe
* SQL Injection
* Session Manipulation

### Cross Site Scripting (XSS)
* **Problem**: fremder Code eines Angreifers wird durch Eingabeparameter oder Eingabefelder in eine Website eingeschleust
* bösartiger Code kann durch Anfrageparameter, Formulare oder Suchmasken übergeben werden
* **Ziel**: Unterschiebung manipulierter Daten zu einem Benutzer
	* Auslesen von Session-IDs, Cookies (Übernehmen der Benutzer-Session)
	* Abfangen von User-Credentials
	* Manipulation von übertragenen Daten

#### Typen von XSS
* **Reflektiert**
	* kurzzeitige einmalige Ausführung von JavaScript über einen Link oder falsche Eingabe
	* Opfer werden einzeln infiziert
* **Persistent**
	* dauerhafte Ausführung des Codes, wenn man die Seite aufruft
	* z.B. Foreneintrag oder Nutzername
	* XSS steht hierbei meistens direkt in der Datenbank
	* alle Benutzer der Seite sind betroffen
* **DOM-Based**
	* Code liest Anfrageparameter aus der URL aus
	* Anfrageparameter enthalten JavaScript
	* schwierig zu finden

### XML External Entity Processing (XXE)
* Angriff auf den zugrundeliegenden XML-Parser
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
  <!DOCTYPE foo [
    <!ELEMENT foo ANY >
    <!ENTITY xxe SYSTEM "file:///dev/random" >]><foo>&xxe;</foo>
```

* Zeile 1: Document Type Definition (DTD)
* Zeile 2: Ausgabe
* `xxe`: Variable wird deklariert
* `&xxe;`: Variable wird eingefügt
* `file:`: Gibt das Protokoll an

#### Angriffsarten
* Auslesen von Dateien
* Portscan interner Ressourcen
* Ansteuern von REST APIs
* Mails verschicken

#### Besonderheiten
* JRE und SMTP sind beide Plain-Text-Protokolle und erlauben somit die Versendung von Kontrollzeichen wie bspw. Line Feeds `<LF>` oder Carriage Returns `<CR>`

#### Vermeidung von XXE
* XML External Entity Processing beim XML-Parser deaktivieren
* ansonsten: Input sanitization, Output Encoding

### Path Traversal
* Zugriff auf andere Dateien im Dateisystem erlangen (außerhalb des Webserver-Verzeichnisses)
* direkt über URL-Parameter möglich ("Dot-Dot-Slash-Methode": `../../../file`)

#### Beispiel
* `http://some_site.lan/get-files?file=../../../../some.dir/some.file`

### SQL Injection
* Einschleusung von SQL-Anweisungen über Eingabefelder
* Auslesen zusätzlicher Daten aus der Datenbank
* Verändern von Daten (`DELETE`,  `INSERT`, `UPDATE`)
* Erraten der Datenbankstruktur
* Ausführen administrativer Operationen (Shutdown, Drop-Table, Dateien einlesen)

### Session Manipulation
* **Ziel**: Authentifizierung umgehen und sich Zugriff mit erweiterten Rechten verschaffen

#### Techniken
* **Session Prediction**: gültige Session-ID vorhersagen
* **Session Fixating**: Mitnutzen einer gültigen Session-ID
* **Session Hijacking**: In Besitz einer aktiven Session gelangen (Session eines Benutzers übernehmen)

### Werkzeuge eines Penetrationstesters
* Netzwerkanalyse-Tools (z.B. nmap)
* Proxy-Tools zur Abhörung von Anwendungsanfragen (z.B. Burp Suite)
* verschiedene Betriebssysteme und Webbrowser
* Software-Entwicklungs- und Reverse-Engineering-Tools
* Sammlung von Exploits
* **wichtigstes Werkzeug: Wissen und Erfahrung**

### Gegenmaßnahmen
* regelmäßig über aktuelle Verwundbarkeiten informieren
* Absicherung der Webserver (Betriebssystem, DBMS)
* Planung von Intranet-Anwendungen für spätere Internet-Zwecke

## Web Application Firewall (WAF)

### Gründe für eine WAF
* Prinzip "Defense in Depth"
* Firewall für HTTP-Verbindungen, daher gerade für Webanwendungen
* Filterung auf Basis von
	* Request/Response-Feldern
	* Sessions
	* Adressen
* bietet Schutz vor
	* Bruteforce-Angriffen
	* injectionbasierten Angriffen
	* XSS

### Implementierung
* als passives Netzwerkgerät
* als aktives Netzwerkgerät
* als Reverse Proxy
* eingebettet (Embedded)

### Web Intrusion Detection / Prevention
* Web IDS/IPS gerne als WAF eingesetzt
* heutige Systeme prüfen Netzwerkverkehr in Echtzeit
* ermöglicht sofortige Erkennung und Verhinderung von bekannten Angriffen

### Ansätze für Web Intrusion Prevention
* **Negative Security Modell**
	* Blacklisting: beschreibt, welche Anfragen verboten sind
	* Wissen über gefährliche Anfragen, um diese zu blockieren
	* öfters eingesetzt, da Regelsätze für viele Anwendungen bereits vorhanden sind
* **Positive Security Modell**
	* Whitelisting: beschreibt, welche Anfragen erlaubt sind
	* komplex umzusetzen, da eine Vielzahl an Informationen miteinbezogen werden muss

### Erkennungsformen
* regelbasierte Erkennung von Angriffen
	* Abarbeitung festgelegter Regeln/Tests
	* bei negativem Test wird der Request blockiert
	* gut geeignet zur Abwehrung bekannter Angriffe, schlecht für Zero Days
* anomaliebasierte Erkennung von Angriffen
	* Aufzeichnung von legitimen Verkehr (Trainingsphase)
	* sehr gute Abwehrung von Angriffen, wenn WAF trainiert ist

### Apache Webserver als WAF
* OpenSource Web Application Firewall
* arbeitet als Modul im Apache Webserver
* kostenlos
* weit verbreitet
* stabil und zuverlässig
* gut skalierbar
* gut dokumentiert
* bietet Negative und Positive Security Modell an

## Kryptographie in der Praxis

### Begriffe aus der Kryptographie
* **Verschlüsselung** (Encryption): Umwandlung von Klartext in Geheimtext mithilfe eines Schlüssels
* **Schlüssel** (Key): Parameter für die Ver- und Entschlüsselung
* **Entschlüsselung** (Decryption): Umwandlung des Geheimtextes in Klartext mithilfe des Schlüssels
* **Entzifferung** (Kryptoanalyse): Techniken zur Entschlüsselung eines Geheimtextes ohne Schlüssel

### Sehr unsichere Verschlüsselungsverfahren
* Cäsar-Chiffre: Rotation eines Zeichen um $k$ Stellen im Alphabet, $k$ ist der Schlüssel der Verschlüsselung
* sehr schwaches Verschlüsselungsverfahren, da eine statistische Häufigkeit von Buchstaben in der Chiffre erkennbar ist
* Buchstabenhäufigkeitsanalyse oder Brute-Force-Angriff führt schnell zum gesuchten Schlüssel

### Symmetrische und asymmetrische Verfahren
**symmetrisch**:
* Ver- und Entschlüsselung verwenden den gleichen Schlüssel
* Vorteil: hohe Geschwindigkeit beim Ver-/Entschlüsseln
* Nachteil: aufwändiger Schlüsselaustausch notwendig
* Beispiel: AES, DES, 3-DES

**asymmetrisch**:
* Ver- und Entschlüsselung verwenden unterschiedliche Schlüssel (Private/Public-Keypairs)
* Vorteil: einfacher Schlüsselaustausch, Public-Key ist öffentlich
* Nachteil: aufwändige und langsame Berechnung der Schlüssel
* Beispiel: RSA

### Hybride Verschlüsselung
* Kombination aus symmetrischer und asymmetrischer Verschlüsselung
* asymmetrische Verschlüsselung für den Austausch eines Session-Keys (symmetrischer Schlüssel)
* symmetrische Verschlüsselung für Datenaustausch (verschlüsselt mit Session-Key)
* Anwendung in SSL/TLS und PGP

### RSA-Verschlüsselung
* asymmetrisches Verschlüsselungsverfahren für Verschlüsselung und digitale Signatur
* privater Schlüssel für Entschlüsselung
* öffentlicher Schlüssel für Verschlüsselung oder Überprüfung der digitalen Signatur
* Aufwand für Berechnung des privaten Schlüssels aus öffentlichem Schlüssel extrem aufwändig
* RSA ist eine Falltürfunktion:
	* Berechnung des Produkts zweier Primzahlen ist ziemlich einfach
	* Rückschließen auf die Primzahlen aus dem Produkt ist sehr schwierig, sofern die Primzahlen und das Produkt groß genug gewählt sind

### Vorsicht beim RSA
* Primzahlen $p$ und $q$ und Eulersche Zahl $\Phi(n)$ müssen nach Erzeugung der Schlüssel unbedingt vernichtet werden

### Sichere Kommunikation mit symmetrischer Verschlüsselung
* **Problem**: Schlüsselaustausch über unsicheren Kommunikationskanal
* Lösung 1: Schlüssel über sicheren Kommunikationskanal austauschen
* Lösung 2: Diffie-Hellman-Schlüsselaustausch
	* eine Nachricht wird über einen unsicheren Kommunikationskanal übertragen und aus dieser wird der private Schlüssel berechnet
	* ein Angreifer kann den geheimen Schlüssel nicht berechnen

### Sicherheit des Diffie-Hellman-Verfahrens
* der Schlüssel $K$ kann nur aus den privaten Zufallszahlen $a$ und $b$ berechnet werden
* **Problem**: DH-Verfahren ist gegen einen Man-in-the-Middle-Angriff nicht sicher
	* Schutz gegen MitM mithilfe einer Authentifizierung der Nachrichten über einen weiteren sicheren Kanal
	* Einsatz von Ephermal Diffie-Hellman und Forward Secrecy bei TLS

### Transport Layer Security (TLS)
* Weiterentwicklung von SSL (Secure Socket Layer)
* hybrides Verschlüsselungsprotokoll zur Datenübertragung über TCP/IP
* Hauptanwendung ist HTTPS und SSL-VPNs
* SSLv2 und SSLv3.0 sollten wegen bekannter Sicherheitslücken nicht mehr verwendet werden

#### Funktionsweise
```mermaid
sequenceDiagram
  participant C as Client
  participant S as Server
  C -->> S: baut Verbindung auf
  S -->> C: authentifiziert sich mit X.509 Zertifikat
  C -->> S: überprüft Übereinstimmung Servername mit Zertifikat
  C -->> S: schickt mit Public-Key des Servers verschlüsselte Zufallszahl
  C -->> C: berechnet geheimen Schlüssel K1
  S -->> S: berechnet geheimen Schlüssel K2
  C --> S: K1 = K2
```
Nach der Berechnung des geheimen Schlüssels kann eine symmetrische Verschlüsselung stattfinden, da $K_1$ und $K_2$ gleich sind.

#### Vorteile von TLS
* höhere Protokolle (z.B. HTTPS aus Anwendungsebene) können auf TLS aufbauen
* wenig CPU-Last durch symmetrische Verschlüsselung

#### Nachteile von TLS
* Verbindungsaufbau durch RSA und DH serverseitig rechenintensiv
* Komprimierung der verschlüsselten Daten kaum möglich
* TLS verschlüsselt nur die Kommunikation zwischen den beiden direkten Kommunikationspartnern

### ECB-Modus für Blockchiffren
* ECB (Electronic Code Book)
* Klartext wird in $n$ Blöcken mit dem gleichen Schlüssel verschlüsselt

### CBC-Modus für Blockchiffren
* CBC (Cipher Block Chaining)
* Klartext wird in $n$ Blöcke aufgeteilt, jeder Block wird nacheinander $m$-mal mit dem Verschlüsselungsalgorithmus verschlüsselt

## Security-Analyse komplexer Systemumgebungen

### Ziele
* Umgang mit Security-Analysen in komplexen Umgebungen
* Identifizieren potentieller Bedrohungen und Gefahren in Systemumgebungen
* Ableiten sinnvoller Gegenmaßnahmen
* Umgang mit Risikoanalyse und Risikoakzeptanz

### Eigenschaften von Security-Analysen in unterschiedlichem Ausmaß
**Einzelne Systeme**:
* überschaubare Komplexität
* Penetrationstests
* System-Reviews
* WhiteBox- und BlackBox-Tests

**Systemumgebungen**:
* beliebig komplex
* komplexe Kommunikationsbeziehungen
* vielseitige Bedrohungen und Verwundbarkeiten

### Vorgehen bei der Security-Analyse

#### 1. Schritt: Identifikation und Clusterung der Schutzziele
* Welche Systeme müssen geschützt werden?
* Wie kritisch sind die Systeme?
* Ermitteln von Schutzzonen in einem Netzwerk
* Bilden der Schutzzonen

#### 2. Schritt: Identifikation der Kommunikationsbeziehungen
* Erstellung einer Kommunikationsmatrix mit allen bekannten Kommunikationskanälen und möglichen Seitenkanälen
* Mögliche Mittel: LAN-Analyse (Wireshark), Monitoring-Port von Switches, Monitoring Software, SIEM (Security Information and Event Management)
* Probleme:
	* zeitaufwändig
	* Komplexität der Daten

#### 3. Schritt: Schutzziele und Kommunikationsbeziehungen analysieren
* Anpassung der Kommunikationsmatrix durch Eliminierung ungenutzter Seitenkanäle
* Schutz der Kommunikationsbeziehungen festlegen
* direkte Verbindungen zwischen Schutzzonen (potentielle Verwundbarkeit) durch Firewalls oder IDS/IPS absichern

#### 4. Schritt: Identifikation möglicher Bedrohungen und Verwundbarkeiten
* vorhandene direkte Verbindungen zwischen Schutzzonen als Verwundbarkeit bewerten
* kritische Systeme sind oft lohnenswerte Angriffsziele
* mögliche Bedrohungen:
	* Systeme über VPN
	* administrative Systeme
	* Entwicklungssysteme
	* Übergangspunkte zu anderen Netzwerken

**Verwundbarkeiten**:
* Internet-Anwender: Kommunikation über unverschlüsselte Verbindungen können abgehört werden
* VPN-Teilnehmer: es kann unbeabsichtigt in die IT-Infrastruktur eingedrungen werden (z.B. aufgrund von unregelmäßigen Sicherheitsupdates)
* ISP-Übergabepunkt: falsch konfigurierte Firewall-Regeln können ungewollt Kommunikationskanäle freilegen

#### 5. Schritt: Ermitteln von Maßnahmen zur Reduzierung der möglichen Bedrohungen und Verwundbarkeiten
* Umsetzung der Einteilung in Schutzzonen
* Reduzierung der Kommunikationsbeziehungen auf das Notwendigste
* durchgehender Einsatz von Perimeterschutz (Firewalls, IDS/IPS, Router mit ACL)
* VPN-Teilnehmer vor Zugriff auf neueste Version aktualisieren
* ständiges Monitoring der kritischen IT-Systeme
* regelmäßige Security-Überprüfungen aller kritischen Server und Anwendungen als auch der Perimeterschutzsysteme

#### 6. Schritt: Durchführung von Risikoanalyse und Risikoakzeptanz
* wenn Bedrohungen/Verwundbarkeiten nicht vermieden werden können, muss eine Risikoanalyse durchgeführt werden
* **Risiko**: Eintrittswahrscheinlichkeit und Auswirkung (Schaden)
* ermittelte Risiken müssen vom Management oder einer leitenden Stelle akzeptiert werden
* keine dauerhafte Lösung

## Übungen zur Netzwerkanalyse

### nmap - Netzwerk- und Portscanner
* Netzwerkanalyse- und Portscanning-Tool
* OpenSource und frei verfügbar
* sehr flexibel und über Lua-ScriptingEngine sehr erweiterbar
* verschiedene Portscan-Möglichkeiten (TCP Connect `-sT`, TCP SYN `-sS`, TCP ACK `-sA`, UDP Scan `-sU`)
* erweiterte Hosterkennung möglich

### Wireshark
* Tool für die Analyse von Netzwerkdaten (wie Kommandozeilentool `tcpdump`)
* Analyse aller Daten über Ethernet und WLAN
* Netzwerkanalyse in Echtzeit oder Snapshot mit einer gespeicherten PCAP-Datei
* Auslesen einer Nachricht über Optionenpunkt "Follow TCP Stream" (ermöglicht Anzeige des kompletten Datenverkehrs)

## Übungen zum Website-Pentesting

### ARP-Spoofing
* nutzt gefälschte ARP-Pakete, um die ARP-Tabelle der Zielsysteme zu manipulieren
* **Ziel**: Datenverkehr des Zielsystems über das ARP-Spoofing-System zu leiten (Man in the Middle)
* ARP-Spoofing-System dient hierbei als Proxy
* alle Systeme müssen sich im gleichen Layer-2-Netzwerk befinden

#### Vorgehensweise
* Dem Linux-Kernel mitteilen, dass IP-Pakete weiter geleitet werden sollen
```bash
echo 1 > /proc/sys/net/ipv4/ip_forward            # IPv4
echo 1 > /proc/sys/net/ipv6/conf/all/forwarding   # IPv6
```
* ARP-Spoofing starten
```bash
arpspoof –t "<target IP>" –r "<gateway IP>"
```
* nun in Wireshark mithilfe der "Follow TCP Stream" Funktion alle Daten einer Verbindung auslesen
* mit HTTPS nicht ohne Weiteres möglich

## Remote und Reverse Shell

### Remote Shell
* **Grundvoraussetzung**: Zielsystem muss ohne oder über falsch konfigurierte Firewall erreichbar sein
* ein Angreifer kann über einen angebotenen Service Schadcode auf dem Zielsystem ausführen (z.B. Remote Code Injection)
* ein Angreifer startet einen Listener auf dem Zielsystem, mit dem er sich verbinden kann und so Shell-Zugriff auf dem System erhält
![Remote Shell](https://i.imgur.com/p5Vwu9M.png)

### Reverse Shell
* **Problem**: Firewall blockiert alle Verbindungen bis auf HTTP und HTTPS
* **Grundvoraussetzung**: Zielsystem muss externe Systeme über die Firewall erreichen können
* ein Angreifer kann über einen Service auf dem System Schadcode ausführen (z.B. Remote Code Injection oder PHP-, ASP-, JSP-Skripte)
* der Angreifer startet auf seinem System einen Listener
* der Angreifer startet dann auf dem Zielsystem eine Reverse Shell, die sich zum Listener auf dem Angreifersystem verbindet
![Reverse Shell](https://i.imgur.com/x5OAGfk.png)
