---
title: Rechnertechnik 15.02.2018
layout: default
permalink: 2018-02-15_rechnertechnik_md
filepath: Semester_4/Rechnertechnik/2018-02-15_rechnertechnik.md
---
# Darstellungen von Daten und Rechenoperationen
_aus der Vorlesung Rechnertechnik vom 15.02.2018_

---

## Bearbeitung der Übung
_Lösung aus der Vorlesung_:
```assembly
 1:  CLA;       # Setze Akku zu 0.
 2:  STR 4711;  # Speichere Akku-Inhalt an Adresse 4711.
 3:  INA;       # Lese Zahl in Akku.
 4:  SKZ 8:;    # Falls Akku = 0, springe zu 8:
 5:  ADD(4711); # Addiere Inhalt von Adresse 4711 zu Akku
 6:  STR 4711;  # Speichere Akku-Inhalt an Adresse 4711.
 7:  SKP 3:;    # Springe zur Adresse 3:
 8:  ADD(4711); # Lade die Summe aus Adresse 4711 in Akku.
 9:  OUT;       # Gebe die Summe aus.
10:  HLT;       # (halt) Stoppe die Ausführung.
```

_Optimierte Version (powered by Fabian)_:
```assembly
def     sum = 4711

        INA;
        SKZ end2;
loop:   STR sum;
        INA;
        SKZ end1;
        ADD(sum);
        SKP loop;
end1:   ADD(sum);
end2:   OUT;
        HLT;
```

Das Maschinenprogramm wird besser verständlich, wenn man für die Speicheradressen den Namen einer Variablen (`sum`) und für die Sprungadressen ebenfalls Namen, sogenannte "**labels**" einführt.

Dieses Vorgehen hat außerdem den Vorteil, dass absolute Speicheradressen bei Änderungen des Programms nicht gesondert gepflegt werden müssen; dadurch wird eine Fehlerquelle vermieden.
Man nähert sich damit einem richtigen Assemblerprogramm.

## Daten und Operationen in einem Prozessor
Architekturen, somit Hardware ist auf wenige, genau spezifizierte Informationsdarstellungen abgestimmt. Diese Informationsdarstellungen nennt man _Daten_. Man unterscheidet folgende Arten von Daten:

* **Verarbeitungsdaten**
	* Festpunktzahlen
	* Gleitpunktzahlen
	* Zeichen
* **Programmdaten**
	* Befehle
	* Speicheradressen
* **Steuerdaten**
	* Steuersignale
	* Programmstatusworte

Zur rechnerinternen Darstellung von Informationen werden physikalische Größen verwendet, die unterschiedliche Zustände annehmen können, z.B.:

* hohe oder niedrige Spannung auf einer Leitung
* hoher oder niedriger Strom in einer Leitung
* "Nord"- und "Süd"-Magnetisierung auf einem magnetischen Medium
* elektrische Ladung oder keine elektrische Ladung im Kondensator einer Speicherzelle

$\Rightarrow$ 2 Zustände $\rightarrow$ binäre Zustände

### Aufbau von Daten
Ein **Maschinenwort** ist eine geordnete endliche Folge von Binärzeichen, die ein Element aus einer Menge von Daten kodiert.

_Gängige Wortlängen sind_:

| **Wortlänge** |  **Abkürzung**  |
|:-------------:|:---------------:|
|      1        |       Bit       |
|      3        |      Triade     |
|      4        | Nibble, Tetrade |
|      8        |      Byte       |

Als Zählereinheit für die Größe eines Speichers werden in der Regel Byte, Wort (2 Byte) oder Doppelwort (4 Byte) verwendet.

_Die Zählereinheiten werden mit Vorfaktoren versehen_:

| **Vorfaktor-Abkürzung** |        **Faktor**              | **dezimale Größenordnung** |
|:----:|:---------:|:-----------:|
| k (kilo)| $2^{10} = 1\,024$ | Tausend $10^3$ |
| M (Mega) | $2^{20} = 1\,048\,576$ | Million $10^6$ |
| G (Giga) | $2^{30} = 107\,371\,824$ | Milliarde $10^9$ (engl. _billion_) |
| T (Tera) | $2^{40} = 1\,099\,511\,627\,776$ | Billion $10^{12}$ (engl. _trillion_) |

### Verarbeitungsdaten
Intern arbeiten digitale Rechner mit dem Dual- oder Binärsystem. Für die Ein-/Ausgabe werden als Zahlensysteme neben dem Dezimalsystem (Basis $10$) auch das Dual- (Basis $2$), das Oktal- (Basis $8$) oder das Hexadezimalsystem (Basis $16$) verwendet.

_Für die Darstellung von Informationen gilt allgemein_:

Jedes $z \in \mathbb{N}$ ist zu einer gegebenen Zahl $b \in \mathbb{N}$ eindeutig mit $n$ Ziffern darstellbar, wenn

$$
z \le b^n - 1
$$

ist.

**Beispiel**: $n = 8, \, b = 2 \quad \Rightarrow \; z \le 2^8 - 1 = 255$
Sei $z = 250$, dann ist

$$
z = \sum_{i = 0}^{n - 1} \; z_i b^i \quad \text{mit} \; z_i \in \{0, 1, \ldots, b - 1\}.
$$
angewendet $\quad 250_d = z_7 \cdot 2^7 + z_6 \cdot 2^6 + z_5 \cdot 2^5 + z_4 \cdot 2^4 +$
$\quad \quad \quad \quad \quad \quad \quad \quad \quad z_3 \cdot 2^3 + z_2 \cdot 2^2 + z_1 \cdot 2^1 + z_0 \cdot 2^0$
$\quad \quad \quad \quad \quad \quad \quad \quad = 1 \cdot 2^7 + 1 \cdot 2^6 + 1 \cdot 2^5 + 1 \cdot 2^4 +$
$\quad \quad \quad \quad \quad \quad \quad \quad \quad 1 \cdot 2^3 + 0 \cdot 2^2 + 1 \cdot 2^1 + 0 \cdot 2^0$
$\quad \quad \quad \quad \quad \quad \quad \quad = 11111010_b.$

### Verfahren zur Umrechnung zwischen Zahlensystemen
Eine Zahl wird zu einer Zahl in $b$-adischer Darstellung (Basis $b$) durch sukzessive Division durch $b$, der jeweilige Rest ist dann die Ziffer $z_i$ in der $b$-adischen Darstellung. Das $n$-Tupel $(z_{n - 1}, z_{n - 2}, \ldots, z_0)$ heißt $b$**-adische Darstellung** von $z$.
**Beispiel**: $z_{10} = 2629_d \rightarrow z_{16} = \; ?$ (konvertiere Dezimalzahl in Hexadezimalzahl)

Schritt 0: $2629 \div 16 = 164 \quad (\text{Rest} \ \ \ 5) \quad \Rightarrow z_0 = 5$
Schritt 1: $\ \ 164 \div 16 = \ \ 10 \quad (\text{Rest} \ \ \ 4) \quad \Rightarrow z_1 = 4$
Schritt 2: $\ \ \ \ 10 \div 16 = \ \ \ \ 0 \quad (\text{Rest} \ 10) \quad \Rightarrow z_2 = A$
$z_3 = z_4 = \ldots = z_{n - 1} = 0$

$\Rightarrow 2629_d = 0A45_h \quad \leftarrow$ Die Zahlen $10$ bis $15$ werden im Hex-System durch die Ziffern $A$ bis $F$ dargestellt.

**Übung**: $z_{10} = 5384_d \rightarrow z_{16} = \; ?$
$5384 \div 16 = 336 \quad (\text{Rest} \ 8) \quad \Rightarrow z_0 = 8$
$\ \ 336 \div 16 = \ \ 21 \quad (\text{Rest} \ 0) \quad \Rightarrow z_1 = 0$
$\ \ \ \ 21 \div 16 = \ \ \ \ 1 \quad (\text{Rest} \ 5) \quad \Rightarrow z_2 = 5$
$\ \ \ \ \ \ 1 \div 16 = \ \ \ \ 0 \quad (\text{Rest} \ 1) \quad \Rightarrow z_3  = 1$

$\Rightarrow z_{16} = 5384_d = \underline{1508_h}$

Umgekehrt wird eine $b$-adische Zahl zu einer Dezimalzahl $z_d$ durch die Berechnung von

$$
z_d = \sum_{i = 0}^{n - 1} \; z_i b^i.
$$

gegeben $z_h = 0A45_h:$
$z_d = 10 \cdot 16^2 + 4 \cdot 16^1 + 5 \cdot 16^0$
$\quad \  = 2560 + 64 + 5$
$\quad \ = 2629$

In allen Zahlensystemen lassen sich die Operationen Addition, Subtraktion, Multiplikation und Division mit dem vom Dezimalsystem bekannten Verfahren ausführen, d.h. stellenweises Rechnen mit Überträgen und Borger.
